//run `node index.js` in the terminal
//STEP 1: IMPORT ALL NECESSARY PACKAGES

const express =  require('express')
const HTTP_SERVER = express();
const cors = require('cors')
var bodyParser = require('body-parser')

HTTP_SERVER.use(cors())
HTTP_SERVER.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
HTTP_SERVER.use(bodyParser.json())
// BASIC SERVER CONFIS
const port = 5000;
//INJECTING DATABASE CONNECTION
require('./Database/dbConfig')

HTTP_SERVER.listen(port,'localhost',()=>{
  console.log("SERVER STARTED in the port", port)
})

//INJECTING API SERVER
HTTP_SERVER.use('/', require('./app'));
