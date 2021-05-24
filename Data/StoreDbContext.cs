using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HandlaLokalt1.Models;
using Microsoft.IdentityModel;

namespace HandlaLokalt1.Data
{
    public class StoreDbContext : DbContext
    {

        public StoreDbContext(DbContextOptions<StoreDbContext> options) : base(options)
        {
    
        }

        public DbSet<StoreModel> StoreModels { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<StoreModel>()
                .HasOne(p => p.User)
                .WithOne(b => b.storeModel)
                ;
                
                
                
        }

    }
}
