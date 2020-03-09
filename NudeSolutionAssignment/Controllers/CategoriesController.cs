using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InsuranceAPI.Models;

namespace InsuranceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly InsuranceDBcontext _context;

        public CategoriesController(InsuranceDBcontext context)
        {
            _context = context;
        }

        // GET: api/Categories/AllCategories
        [HttpGet]
        [Route("AllCategories")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        // GET: api/Categories/CategoryItems
        [HttpGet]
        [Route("CategoryItems")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoriesWithItems()
        {
            return await _context.Categories.Include(i => i.Items).ToListAsync();
        }
    }
}
