ECommerceNoSQLApi
=================


Work on progress : 


Api doc : 

Start mongod.exe
create mongodb/data
start by C:\mongodb\bin\mongod.exe --dbpath d:\\ECommerceNoSQLApi\mongodb\data

ROUTES : 
------

* Insert product (demo only ): http://localhost:1337/insertDemoProduct
* Consult product : localhost:1337/consult/product/:code (the demo json has a product code equal to ABCDEF123, so you should do localhost:1337/consult/product/ABCDEF123 to consult it)