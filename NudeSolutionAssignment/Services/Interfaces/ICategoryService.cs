﻿using InsuranceAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Services.Interfaces
{
    public interface ICategoryService : IGenericService<Category>
    {
        Task<IEnumerable<Category>> GetCategoryItems();
    }
}
