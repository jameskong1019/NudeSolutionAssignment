using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Models
{
    public class Item
    {

        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; }

        [Column(TypeName = "money")]
        public decimal Value { get; set; }

        [ForeignKey("Category")]
        public int CategoryId { get; set; }
        public Category ItemCategory { get; set; }

        [Column("IsDeleted", TypeName = "bit")]
        public bool? IsDeleted { get; set; }


    }
}
