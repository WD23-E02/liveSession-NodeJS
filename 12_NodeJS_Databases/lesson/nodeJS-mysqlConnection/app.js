import mysql from 'mysql';


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '', /* process.env.PASSWORD */
  database : 'dci'
});
 
connection.connect();
 
connection.query('SELECT students.name AS stName, students.age, classes.name AS clName, classes.teacher FROM students INNER JOIN classes ON students.classId= classes.id', function (error, results, fields) {
  if (error) throw error;
  console.log(results); // data receive against your query
  console.log(fields) // info about all fields in the table
});

connection.query('SELECT * from classes', function (error, results, fields) {
    if (error) throw error;
    console.log(results); // data receive against your query
    console.log(fields) // info about all fields in the table
  }); 

connection.end();