using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Links.Entities
{
    public class LinksRepository : ILinksRepository
    {
    

        public void Delete(tblLinks link)
        {
            using (var dbContext = new LinksToSaveDBEntities1())
            {
                var elToDelete = dbContext.tblLinks.Select(el => el).Where(el => el.Id == link.Id).Single();

                dbContext.tblLinks.Remove(elToDelete);

                dbContext.SaveChanges();
            }
        }

        public IEnumerable<tblLinks> GetAllLinks()
        {
            using (var dbContext = new LinksToSaveDBEntities1())
            {
                List<tblLinks> links = dbContext.tblLinks.ToList<tblLinks>();

                return links;
            }
        }

        public tblLinks Add(tblLinks link)
        {
            using (var dbContext = new LinksToSaveDBEntities1())
            {
                dbContext.tblLinks.Add(link);
                dbContext.SaveChanges();
                return link;
            }
        }

        public tblLinks Update(tblLinks link)
        {
            using (var dbContext = new LinksToSaveDBEntities1())
            {
                var elToUpdate = dbContext.tblLinks.Select(el => el).Where(el => el.Id == link.Id).Single();

                elToUpdate.Description = link.Description;
                elToUpdate.Name = link.Name;
                elToUpdate.Path = link.Path;

                dbContext.SaveChanges();
                return link;
            }
        }
    }
}
