using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Dtos;
using Core.Interfaces;
using Core.Models;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Newtonsoft.Json;

namespace Infrastructure.Services
{
    public class BookService : IBookService
    {
        private readonly IMongoCollection<BsonDocument> _booksCollection;
        private readonly IMongoClient _client;
        private readonly IMongoDatabase _database;
        private readonly IUnitOfWork _unitOfWork;
        public BookService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _client = (IMongoClient)_unitOfWork.GetMongoClient();
            _database = _client.GetDatabase("bookStore");
            _booksCollection = _database.GetCollection<BsonDocument>("BookCollection");
        }

        public async Task<Book> GetBookById(string bookId)
        {
            var bookIdFilter = Builders<BsonDocument>.Filter.Eq("_id", bookId);
            var bookDetailDocument = (await _booksCollection.FindAsync(bookIdFilter)).FirstOrDefault();
            var bookDetail = BsonSerializer.Deserialize<Book>(bookDetailDocument.ToJson());
            return bookDetail;
        }

        public async Task<Book> GetBookByName(string bookName)
        {
            var bookNameFilter = Builders<BsonDocument>.Filter.Eq("Name", bookName);
            var bookDocument = (await _booksCollection.FindAsync(bookNameFilter)).FirstOrDefault();
            if (bookDocument == null) return null;
            var book = BsonSerializer.Deserialize<Book>(bookDocument.ToJson());
            return book;
        }

        public async Task<bool> BookExistsByName(string bookName)
        {
            return await GetBookByName(bookName) == null ? false : true;
        }
        public async Task<IReadOnlyList<Book>> GetBooks()
        {
            var filter = Builders<BsonDocument>.Filter.Empty;
            var booksDocument = await _unitOfWork.FindAsync(_booksCollection, filter);
            var books = BsonSerializer.Deserialize<IReadOnlyList<Book>>(booksDocument.ToJson());
            return books;
        }

        public async Task<Book> UploadBook(UploadBookDto uploadBookDto)
        {
            var book = new Book
            {
                Name = uploadBookDto.Name,
                Author = uploadBookDto.Author,
                Description = uploadBookDto.Description,
                Pages = uploadBookDto.Pages,
                Price = uploadBookDto.Price,
                PictureUrl = uploadBookDto.PictureUrl,
                Genre = uploadBookDto.Genre
            };
            book._id = ObjectId.GenerateNewId().ToString();
            book.AddedOn = DateTime.UtcNow;
            var bookDocument = book.ToBsonDocument();
            if (await _unitOfWork.BookExists(_booksCollection, book.Name))
            {
                return null;
            }
            var result = await _unitOfWork.InsertOneAsync(_booksCollection, bookDocument);
            return result == true ? book : null;
        }

    }
}