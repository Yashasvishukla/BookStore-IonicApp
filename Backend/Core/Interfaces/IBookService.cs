using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Dtos;
using Core.Models;

namespace Core.Interfaces
{
    public interface IBookService
    {
        Task<Book> GetBookById(string bookId);
        Task<Book> GetBookByName(string bookName);
        Task<bool> BookExistsByName(string bookName);
        Task<IReadOnlyList<Book>> GetBooks();
        Task<Book> UploadBook(UploadBookDto book);
    }
}