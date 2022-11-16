const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require("http").createServer(app);

require('dotenv').config(); //Required to access .env files
// Use bodyParser to parse JSON
app.use(bodyParser.json());
//URL calls paths must be before paths below to default html page. Otherwise, it will not work
app.get("/server/testResp", testResp)
async function testResp (req, res) {
    console.log('Request for data received by Express backend');
    res.status(200).json("String sent by Express backend");
}

if(process.env.NODE_ENV != "production"){
    app.get('/server/', async function(req, res){
         console.log('Main page loading...');
         res.sendFile(__dirname + '/client/public/index.html');
    });
    app.use(express.static(path.join(__dirname, 'client')));

    app.get('*', (req, res) =>{
        res.sendFile(path.join(__dirname+'/client/public/index.html'));
    })
} else if(process.env.NODE_ENV == "production"){
     app.get('/server/', async function(req, res){
         console.log('Main page loading...');
         res.sendFile(__dirname + '/client/build/index.html');
     });
     
     app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', (req, res) => {
         res.sendFile(path.join(__dirname+'/client/build/index.html'));
    })
}
app.listen(process.env.PORT || 5000, function (){
    if(process.env.PORT !== undefined){
        console.log(`App running on process.env.PORT ${process.env.PORT}`);
    } else {
         console.log(`App running on PORT 5000`);
    }
});
