namespace Infrastructure.Data
{
    public interface IStoreContext
    {
        public string MongoDbConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }
}