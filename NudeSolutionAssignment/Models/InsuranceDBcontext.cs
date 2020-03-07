using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Models
{
    public class InsuranceDBcontext:DbContext
    {
        public InsuranceDBcontext(DbContextOptions<InsuranceDBcontext> options) : base(options)
        {

        }

        public DbSet<Item> Items { get; set; }

        public DbSet<Category> Categories { get; set; }
    }
}
