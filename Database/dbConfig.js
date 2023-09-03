const mongoose = require("mongoose")
const BASE_URL = "mongodb://192.168.1.4:27017/Bookudu"

const DATABASE_NAME = "Bookudu"

mongoose.connect("mongodb://127.0.0.1:27017/Bookudu")
.then((response) =>{
    if(response)
    {
        console.log("Hello Buddy Cool, its me sivaji")
    }
    else{
        console.log("SOMETHING WENT WRONG")
    }
})
.catch((err)=>{
    if(err)
    {
        console.log("DAMN FAILURE",err)
    }
    else{
        console.log("SOMETHING WENT WRONG")
    }
})