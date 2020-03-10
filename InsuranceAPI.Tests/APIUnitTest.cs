using InsuranceAPI.Models;
using InsuranceAPI.Services;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Linq;
using Xunit;

namespace InsuranceAPI.Tests
{
    public class APIUnitTest
    {
        //Unit Test with in-memory data
        [Fact]
        public async void CreateItemTest()
        {
            var options = new DbContextOptionsBuilder<InsuranceDBcontext>()
                .UseInMemoryDatabase(databaseName: "Create_Item_Test")
                .Options;

            using (var context = new InsuranceDBcontext(options))
            {
                var _itemService = new ItemService(context);
                var _categoryService = new CategoryService(context);

                await _categoryService.Create(new Category
                {
                    Name = "Category",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category2",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category3",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category4",
                });

                Item item = new Item
                {
                    Name = "Product",
                    Value = 1000,
                    CategoryId = 1
                };
                await _itemService.Create(item);

                await _itemService.Create(new Item
                {
                    Name = "Product2",
                    Value = 1000,
                    CategoryId = 1
                });
                await _itemService.Create(new Item
                {
                    Name = "Product3",
                    Value = 1000,
                    CategoryId = 1
                });

                context.SaveChanges();
                Assert.Equal(1, item.Id);
            }
        }

        [Fact]
        public async void GetAllItemsTest()
        {
            var options = new DbContextOptionsBuilder<InsuranceDBcontext>()
                .UseInMemoryDatabase(databaseName: "Get_All_Items_Test")
                .Options;

            using (var context = new InsuranceDBcontext(options))
            {
                var _itemService = new ItemService(context);
                var _categoryService = new CategoryService(context);

                await _categoryService.Create(new Category
                {
                    Name = "Category",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category2",
                });

                await _itemService.Create(new Item
                {
                    Name = "Product",
                    Value = 1000,
                    CategoryId = 1
                });

                await _itemService.Create(new Item
                {
                    Name = "Product2",
                    Value = 1000,
                    CategoryId = 1
                });

                await _itemService.Create(new Item
                {
                    Name = "Product3",
                    Value = 1000,
                    CategoryId = 1
                });

                context.SaveChanges();

                var categories = await _categoryService.GetCategoryItems();
                Assert.Equal(3, categories.FirstOrDefault().Items.Count());
            }
        }

        [Fact]
        public async void GetCategoriesTest()
        {
            var options = new DbContextOptionsBuilder<InsuranceDBcontext>()
                .UseInMemoryDatabase(databaseName: "Get_Categories_Test")
                .Options;

            using (var context = new InsuranceDBcontext(options))
            {
                var _itemService = new ItemService(context);
                var _categoryService = new CategoryService(context);

                await _categoryService.Create(new Category
                {
                    Name = "Category",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category2",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category3",
                });

                await _categoryService.Create(new Category
                {
                    Name = "Category4",
                });

                var categories = await _categoryService.GetAll();
                Assert.Equal(4, categories.Count());
            }
        }

        [Fact]
        public async void DeleteItemTest()
        {
            var options = new DbContextOptionsBuilder<InsuranceDBcontext>()
                .UseInMemoryDatabase(databaseName: "Delete_Item_Test")
                .Options;

            using (var context = new InsuranceDBcontext(options))
            {
                var _itemService = new ItemService(context);
                var _categoryService = new CategoryService(context);

                await _categoryService.Create(new Category
                {
                    Name = "Category",
                });

                await _itemService.Create(new Item
                {
                    Name = "Product",
                    Value = 1000,
                    CategoryId = 1
                });

                await _itemService.Create(new Item
                {
                    Name = "Product2",
                    Value = 1000,
                    CategoryId = 1
                });

                await _itemService.Create(new Item
                {
                    Name = "Product3",
                    Value = 1000,
                    CategoryId = 1
                });

                var item = await _itemService.GetById(3);
                await _itemService.Delete(item);
                context.SaveChanges();

                var categories = await _categoryService.GetCategoryItems();

                Assert.Equal(2, categories.FirstOrDefault().Items.Count());
            }
        }
    }
}
