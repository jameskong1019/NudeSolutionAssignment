using InsuranceAPI.Models;
using InsuranceAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Services
{
    public class CategoryService : GenericService<Category>, ICategoryService
    {
        public CategoryService(InsuranceDBcontext context) : base(context)
        {
        }

        public async Task<IEnumerable<Category>> GetCategoryItems()
        {
            return await Context.Categories.Include(i => i.Items).ToListAsync();
        }
    }
}
