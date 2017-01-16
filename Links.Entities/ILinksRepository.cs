using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Links.Entities
{
    interface ILinksRepository
    {
        IEnumerable<tblLinks> GetAllLinks();
        tblLinks Add(tblLinks link);
        tblLinks Update(tblLinks link);
        void Delete(tblLinks link);
    }
}
