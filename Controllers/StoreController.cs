using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HandlaLokalt1.Data;
using HandlaLokalt1.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HandlaLokalt1.Controllers
{
    [Authorize]
    [Route("[controller]")]
    [ApiController]
    public class StoreController : ControllerBase
    {
        private readonly StoreDbContext _storeDbContext;
        private readonly ApplicationDbContext _applicationDbContext;
        private readonly UserManager<ApplicationUser> _userManager;


        public StoreController(StoreDbContext storeDbContext, ApplicationDbContext applicationDbContext, UserManager<ApplicationUser> userManager)
        {
            _storeDbContext = storeDbContext;
            _applicationDbContext = applicationDbContext;
            _userManager = userManager;
            CreateStore();

        }

   
        // GET: api/<StoreController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<StoreController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<StoreController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<StoreController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<StoreController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }



        [HttpPost]
        [Route("createstore")]
        public void CreateStore()               /*public void CreateStore(StoreModel store)*/
        {
            Console.WriteLine("kommer vi hit?");
            try
            {
                //string userID = _userManager.GetUserId(User);

                _storeDbContext.StoreModels.Add(new Models.StoreModel
                {
                    //Id = Convert.ToInt32(storeOwner.Id),

                    UserId = "6",
                    StoreName = "testButik",
                    StorePagePicture = "",
                    StorePageDescription = "Testdescription",
                    StorePhoneNumber = "0707070707",
                    StoreEmail = "",
                    StoreAdress = "gatan1",
                    BusinessHoursWeekDays = "12",
                    BusinessHoursSaturday = "12",
                    BusinessHoursSunday = "12"

                    //StoreName = store.StoreName,
                    //StorePagePicture = store.StorePagePicture,
                    //StorePageDescription = store.StorePageDescription,
                    //StorePhoneNumber = store.StorePhoneNumber,
                    //StoreEmail = store.StoreEmail,
                    //StoreAdress = store.StoreAdress,
                    //BusinessHoursWeekDays = store.BusinessHoursWeekDays,
                    //BusinessHoursSaturday = store.BusinessHoursSaturday,
                    //BusinessHoursSunday = store.BusinessHoursSunday


                });

                _storeDbContext.SaveChanges();
            }
            catch (Exception e) { }
        }

        //public ApplicationUser ReturnUserObj()
    }
}
