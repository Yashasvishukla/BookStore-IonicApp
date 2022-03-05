using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Dtos
{
    public class UploadBookDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Genre { get; set; }
        public string Author { get; set; }
        public string PictureUrl { get; set; }
        public long Pages { get; set; }
    }
}