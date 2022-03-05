using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Interfaces;
using Infrastructure.Data;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Infrastructure
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly IStoreContext _context;
        public UnitOfWork(IStoreContext context)
        {
            _context = context;
        }

        public async Task<bool> BookExists(IMongoCollection<BsonDocument> collection,string bookName)
        {
            var filter = Builders<BsonDocument>.Filter.Eq("Name", bookName);
            var result = await(await collection.FindAsync(filter)).ToListAsync();
            return result.Count > 0; 
        }

        public object GetMongoClient()
        {
            return new MongoClient(_context.MongoDbConnectionString);
        }

        public async Task<bool> InsertOneAsync(IMongoCollection<BsonDocument> collection, BsonDocument document)
        {
            await collection.InsertOneAsync(document);
            return true;   
        }

        public async Task<List<BsonDocument>> FindAsync(IMongoCollection<BsonDocument> collection, FilterDefinition<BsonDocument> filter)
        {
           var result = await(await collection.FindAsync(filter)).ToListAsync();
           return result;
        }
    }
}