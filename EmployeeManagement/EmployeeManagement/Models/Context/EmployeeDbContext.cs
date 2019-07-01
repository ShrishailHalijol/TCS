using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EmployeeManagement.Models.Context
{
    public class EmployeeDbContext: DbContext
    {
        public EmployeeDbContext():base("DbEmployeeManagement")
        {

        }

        public DbSet<Employee> Employees { get; set; }
    }
}