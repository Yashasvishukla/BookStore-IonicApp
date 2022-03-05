using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Models;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Core.Interfaces
{
    public interface IUnitOfWork
    {
        object GetMongoClient();
        Task<bool> BookExists(IMongoCollection<BsonDocument> collection,string bookName);
        Task<bool> InsertOneAsync(IMongoCollection<BsonDocument> collection,BsonDocument document);
        
        Task<List<BsonDocument>> FindAsync(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter); 
    }
}