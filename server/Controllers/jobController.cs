using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JobController : ControllerBase
    {
        private readonly List<Job> _jobs = new List<Job>
        {
            new Job { JobTitle = "ORS", JobField = "AccountsManager", ScopeOfHours = 40, Area = "TelAviv", Requirements = "2 years of experience", WorkFromHome = false },
            new Job { JobTitle = "Matrix", JobField = "programmer", ScopeOfHours = 30, Area = "Jerusalem", Requirements = "BA", WorkFromHome = true },
            new Job { JobTitle = "Ness", JobField = "programmer", ScopeOfHours = 50, Area = "Kfar Saba", Requirements = "Office knowledge", WorkFromHome = false },
            new Job { JobTitle = "Intel", JobField = "programmer", ScopeOfHours = 45, Area = "Jerusalem", Requirements = "5 years of experience", WorkFromHome = false },
            new Job { JobTitle = "CityBook", JobField = "secretary", ScopeOfHours = 20, Area = "Modiin Ilit", Requirements = "BA", WorkFromHome = false },
            new Job { JobTitle = "Seminar Beit Yakov", JobField = "secretary", ScopeOfHours = 40, Area = "Modiin Ilit", Requirements = "Office knowledge", WorkFromHome = false }

        };

        [HttpGet]
        public IActionResult GetJobs()
        {
            return Ok(_jobs);
        }
    }
}