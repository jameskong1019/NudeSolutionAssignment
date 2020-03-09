using InsuranceAPI.Models;
using InsuranceAPI.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Services
{
    public class ItemService : GenericService<Item>, IItemService
    {
        public ItemService(InsuranceDBcontext context) : base(context)
        {
        }
    }
}
