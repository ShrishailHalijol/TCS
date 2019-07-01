using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace EmployeeManagement.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Employee Management";
            return View();
        }

        [Route("Register")]
        public ActionResult Register()
        {
            return View();
        }

        [Route("Login")]
        public ActionResult Login()
        {
            return View();
        }

        [Route("Employees")]
        public ActionResult Employees()
        {
            return View();
        }
    }
}
