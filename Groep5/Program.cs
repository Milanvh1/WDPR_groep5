using ChairReserveAPI;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

public class main {
    public static void Main(string[] args) {
        Console.WriteLine("Main Loaded");
        var host = WebHost.CreateDefaultBuilder()
            .UseStartup<Startup>()
            .Build();
        host.Run();
    }
}

namespace ChairReserveAPI {
[Route("api/bookedchairsdata")]
[ApiController]
public class DataController : ControllerBase
{
    //Put List in database when database done
    List<int> bookedChairs = new List<int>();

    // POST api/data
    [HttpPost]
    public ActionResult<string> Post([FromBody] string value)
    {
        // Process data and store it in the backend
        return "Data successfully stored";
    }

    // GET api/data
    [HttpGet]
    public ActionResult<string> Get()
    {
        Console.WriteLine("GET API COMPLETED!!!!");
        // Retrieve data from the backend
        bookedChairs.Add(1);
        bookedChairs.Add(5);
        bookedChairs.Add(7);
        return JsonConvert.SerializeObject(bookedChairs);
    }
    }
}