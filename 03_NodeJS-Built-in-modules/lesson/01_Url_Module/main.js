const url = require("url")
//CommonJS

const homePageUrl = "https://dummyusers.com/users?city=berlin&country=germany"
//                   protocol=>server/host/domain/DNS/origin =>pathname/route/endpoint => query/search



const urlObject= url.parse(homePageUrl,true)
console.log(urlObject.protocol) //https:
console.log(urlObject.host)// dummyusers.com
console.log(urlObject.pathname)// /users
console.log(urlObject.query) //city=berlin&country=germany (without true option in parse)
console.log(urlObject.query.country)
console.log(urlObject.query.city)

