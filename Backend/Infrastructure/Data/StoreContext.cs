namespace Infrastructure.Data
{
    public class StoreContext : IStoreContext
    {
        public string MongoDbConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}