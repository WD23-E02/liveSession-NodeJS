/* 
MongoDB is a NoSQL database, which means it doesn't follow the traditional relational database structure like SQL. Instead of organizing data into tables with predefined columns and rows, MongoDB stores data in a more flexible format known as documents.

 Each database in MongoDB is composed of collections, and within each collection, we find documents.

 A document in MongoDB is a single data entry. It's just a set of key-value pairs just like object in js, where each field holds a specific piece of data or information.


CRUD operations

use books // to use a books db 

db.books.insertOne({name:"300",years:2010 })
show collections  // to show collections 


db.books.find() // to find all documents in books collection

for more commands 
https://www.mongodb.com/developer/products/mongodb/cheat-sheet/#crud
*/
