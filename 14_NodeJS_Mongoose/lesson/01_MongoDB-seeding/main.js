import {MongoClient} from "mongodb"

const url = "mongodb://127.0.0.1:27017"

const client = new MongoClient(url)

async function main(){
    await client.connect()
    const db = client.db("mongoDB_test")
    return db;
}

main().then(async db=>{
    const users = db.collection("users")
    /* const result = await users.insertOne({name:"Naqvi",age:32,city:"berlin"}) */
  /*   const usersData = await users.find().toArray() */
   
 /*  const updatedUser = await users.updateOne({_id:"6548a6e4482eed5c86115461"}, {$set: {age:34}}) */
  /* console.log(updatedUser) */
})