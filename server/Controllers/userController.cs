using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly List<User> _users = new List<User>
        {
            new User { Id = 1, name = "Batsheva", Password = "bbbbbbbbb", JobSearchField = "AccountsManager" },
            new User { Id = 2, name = "Pnina", Password = "ppppppppp", JobSearchField = "programmer" },
            new User { Id = 3, name = "Ayala", Password = "aaaaaaaaa", JobSearchField = "secretary" }
        };

        [HttpGet("{username}/{password}")]
        public IActionResult Authenticate(string username, string password)
        {
            var user = _users.FirstOrDefault(u => u.name == username && u.Password == password);

            if (user == null)
            {
                // return NotFound();
                return StatusCode(401, "Invalid username or password");

            }

            return Ok(user);
        }

    }
}