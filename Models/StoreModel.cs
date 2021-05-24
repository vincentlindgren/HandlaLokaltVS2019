using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;



namespace HandlaLokalt1.Models
{

    public class StoreModel
    {
        public int Id { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }

        public string StoreName { get; set; }
        public string StorePagePicture { get; set; }
        public string StorePageDescription { get; set; }
        public string StorePhoneNumber { get; set; }
        public string StoreEmail { get; set; }
        public string StoreAdress { get; set; }
        public string BusinessHoursWeekDays { get; set; } 
        public string BusinessHoursSaturday { get; set; }
        public string BusinessHoursSunday { get; set; }
    }
}

