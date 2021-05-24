﻿using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HandlaLokalt1.Models
{
    public class ApplicationUser : IdentityUser
    {
        public StoreModel storeModel { get; set; }

    }
}
