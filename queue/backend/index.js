const express = require('express')
const fs = require("fs");
const app = express(); //dessa rader låter oss använda express i vår index.js-fil
const port = 4000; //vilken port vi vill ha
const cors = require("cors")
// const path = require("path")
//
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use(cors({
    origin: "*"
}));



// app.post("/api_post", function (req, res) {

//     let filePath = __dirname + "/public/allClubs.json"
//     fs.readFile(filePath, "utf8", (err, data) => {
//         try {
//             const jox = JSON.parse(data)
//             jox.push(req.body)
//             fs.writeFileSync(filePath, JSON.stringify(jox))
//         } catch (err) {
//             return console.log(err);
//         }
//     })
// })





app.post("/api2_post", function (req, res) {
    let filePath = __dirname + "/public/logins.json"
    let account = fs.readFileSync(filePath);
    let accountArray = JSON.parse(account);
    accountArray.push(req.body)
    fs.writeFileSync(filePath, JSON.stringify(accountArray))
    let newAccount = fs.readFileSync(filePath)
    res.send(newAccount)
})



//vill vi skapa en GET-route
//det är då denna vi kommer anropa från vår react-app (klientsidan)
app.use(express.static("public"))


//vad som kommer ske när vi satt igång vår server
//vi tar bara och loggar vilken port vi är på
app.listen(port, () => {
    console.log('Server is listening on port ' + port)
})