using System.Threading.Tasks;
using Core.Interfaces;
using Core.Models;
using Core.Dtos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BooksController : ControllerBase
    {
        private readonly IBookService _repo;
        public BooksController(IBookService repo)
        {
            _repo = repo;
        }
        [HttpGet]
        public async Task<IActionResult> GetBooks()
        {
            var books = await _repo.GetBooks();
            return Ok(books);
        }

        [HttpGet("{bookId}")]
        public async Task<IActionResult> GetBookById(string bookId)
        {
            var bookDetail = await _repo.GetBookById(bookId);
            if(bookDetail == null) return BadRequest("Book Not Found with the Id");
            return Ok(bookDetail);
        }

        [HttpPost]
        public async Task<IActionResult> UploadBook([FromBody] UploadBookDto book)
        {
            var bookUploaded = await _repo.UploadBook(book);
            if(bookUploaded == null) return BadRequest("Book Name Already Exists .Unable to upload book");
            
            return Ok(bookUploaded);
        }
        
        [HttpPost("{bookName}")]
        public async Task<IActionResult> BookExistsByName(string bookName)
        {
            var bookExists = await _repo.BookExistsByName(bookName);
            if(!bookExists) return Ok("Valid Book Name");
            return BadRequest("Book Name already Taken! Please Enter a different Book Name");
        }

    }
}