using System;

namespace Core.Models
{
    public class Book
    {
        public object _id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Genre { get; set; }
        public string Author { get; set; }
        public DateTime AddedOn { get; set; }
        public decimal Rating { get; set; }
        public string PictureUrl { get; set; }
        public long Pages { get; set; }
        public long  BuyersCount { get; set; }
    }
}