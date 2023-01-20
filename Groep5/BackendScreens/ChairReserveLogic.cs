// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using Microsoft.AspNetCore.Mvc;
// using Newtonsoft.Json;

// namespace ChairReserveAPI {
// [Route("api/bookedchairsdata")]
// [ApiController]
// public class DataController : ControllerBase
// {
//     //Put List in database when database done
//     List<int> bookedChairs = new List<int>();

//     // POST api/data
//     [HttpPost]
//     public ActionResult<string> Post([FromBody] string value)
//     {
//         // Process data and store it in the backend
//         return "Data successfully stored";
//     }

//     // GET api/data
//     [HttpGet]
//     public ActionResult<string> Get()
//     {
//         Console.WriteLine("GET API COMPLETED!!!!");
//         // Retrieve data from the backend
//         return "Retrieved data: " + JsonConvert.SerializeObject(bookedChairs);
//     }
//     }
// }

// // public class APIPostTestClass {
// //     public async void APIPostTestMethode() {
// //         var client = new HttpClient();
// //         var response = await client.GetAsync("http://localhost:3000/api/data");
// //         var responseString = await response.Content.ReadAsStringAsync();
// //         Console.WriteLine(responseString);
// //     }
// // }