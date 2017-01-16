using Links.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Links.Web.UI.Controllers
{
    public class LinksController : Controller
    {
        LinksRepository repository = new LinksRepository();

        [HttpGet]
        public ActionResult Index()
        {

            return View();
        }

        [HttpGet]
        public ActionResult GetLinks()
        {
            var links = repository.GetAllLinks();
            //   using (var context = new LinksToSaveDBEntities())
            //  {
            //var links = context.tblLinks.ToArray();
            return Json(links, JsonRequestBehavior.AllowGet);

            //   }
        }
        [HttpPost]
        public ActionResult AddLink(tblLinks link)
        {

            tblLinks addedLink = repository.Add(link);
            return Json(addedLink);
        }
    }
}