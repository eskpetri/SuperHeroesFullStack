# SuperHeroesFullStack

From Patrick God source to .Net7 and new database table fields to BackEnd to serve FrontEnd and adjusting FrontEnd to new fields. <br/>
https://www.youtube.com/watch?v=dtthbiP3SE0& <br/>

Suomeksi blogi ja aiheeseen liittyviä linkkejä. https://angularalkeet.blogspot.com/2022/11/full-stack-sovellus.html (In Finnish same as here)

## What to do

Side by side increace DB fields from Date to every field available. DB First approuch. Make a system to keep previous DBcontext alive and working while intdrodusing new fields. Learn UI what it comes to inputs. Little bit CSS on the go. Just checking how Code First can be moved to DB First and making DB larger than original. Bring data to FrontEnd and use according fields in HTML to make correct inputs possible and incorrect impossible along the way.

## Occurred problems and solutions 
After updating BackEnd to .NET7 and all pacgakes to newest ones. Error arised while making get all query in Swagger: "Microsoft.Data.SqlClient.SqlException (0x80131904): 
A connection was successfully established with the server, but then an error occurred during the login process. 
(provider: SSL Provider, error: 0 - The certificate chain was issued by an authority that is not trusted."<br/>
Searched that one from google and narrowed result to past month (actually week would been more presice).
https://github.com/dotnet/SqlClient/issues/1836 <br/>
https://learn.microsoft.com/en-us/ef/core/what-is-new/ef-core-7.0/breaking-changes#encrypt-true <br/>
Added to connection string TrustServerCertificate=True ie "server=localhost\\sqlexpress;database=superherodb;trusted_connection=true;TrustServerCertificate=True"

