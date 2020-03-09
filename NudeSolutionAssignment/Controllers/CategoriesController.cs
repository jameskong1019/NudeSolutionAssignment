using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InsuranceAPI.Models;
using InsuranceAPI.Services.Interfaces;

namespace InsuranceAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // GET: api/Categories/AllCategories
        [HttpGet]
        [Route("AllCategories")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            var categories = await _categoryService.GetAll();
            return Ok(categories);
        }

        // GET: api/Categories/CategoryItems
        [HttpGet]
        [Route("CategoryItems")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoryItems()
        {
           var items = await _categoryService.GetCategoryItems();
           return Ok(items);
        }
    }
}
