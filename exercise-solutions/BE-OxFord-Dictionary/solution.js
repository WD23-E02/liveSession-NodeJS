import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

//get your app_id and app_key from https://developer.oxforddictionaries.com/
const app_id = process.env.APP_ID;
const app_key = process.env.APP_KEY;

const word = process.argv.slice(-1);

let url = `https://od-api.oxforddictionaries.com/api/v2/entries/en/${word}`;

const fetchOptions = {
    method:'GET',   
    headers: {app_key, app_id}
    }


fetch(url, fetchOptions)
    .then(res=>res.json())
    .then(data=>{ 
        const result = data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses;
        const type = data.results[0].lexicalEntries[0].lexicalCategory.text;
        
        console.log(`   ${word} (${type})`);

        result && result.forEach((element, i) => {
              console.log(`${i + 1}. ${element.shortDefinitions[0]}`);
            });

        console.log("\n" +`Provided by: ${data.metadata.provider}`);
    
    })
    .catch(console.log);
const axios = require('axios');
const app_id = '01771b3f';
const app_key = '3a33fdf314d252b8b27b98e7c6dfeca2';



const endpoint = 'entries';
const language_code = 'en';
const word = process.argv.slice(2)[0];

let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`;


async function getData(){

try{
    const res  = await axios.get(url , {
        method:'get',   
        headers: {app_key : app_key, app_id:app_id}
    });
    const result = res.data.results[0].lexicalEntries[0].entries[0].senses[0].subsenses;
    const type = res.data.results[0].lexicalEntries[0].lexicalCategory.text;
    console.log(`${word} (${type})`);
    result && result.forEach((element, i) => {
              console.log(`${i + 1}. ${element.shortDefinitions[0]}`);
    });
      console.log("\n\n" +`Provided by: ${res.data.metadata.provider}`);
    
    }
    catch(err){
        console.log(err);
    }
    
}

getData();
