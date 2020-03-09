using InsuranceAPI.Models;
using InsuranceAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceAPI.Services
{
    public class GenericService<T> : IGenericService<T> where T : class
    {
        internal InsuranceDBcontext Context { get; set; }
        internal DbSet<T> dbSet;

        public GenericService(InsuranceDBcontext context)
        {
            this.Context = context;
            this.dbSet = context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await dbSet.ToListAsync();
        }

        public async Task<T> GetById(int id)
        {
            return await dbSet.FindAsync(id);
        }

        public async Task Create(T entity)
        {
            await dbSet.AddAsync(entity);
            await Context.SaveChangesAsync();

        }

        public async Task Update(T entity)
        {
            dbSet.Attach(entity);
            Context.Entry(entity).State = EntityState.Modified;
            await Context.SaveChangesAsync();
        }

        public async Task Delete(T entity)
        {
            dbSet.Remove(entity);
            await Context.SaveChangesAsync();
        }
    }
}
