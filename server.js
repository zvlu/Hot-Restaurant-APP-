const express = require('express')
const path = require("path")

const app = express();
const PORT = process.env.PORT || 3000;

const reservations = [
    {
        name: "name",
        phone: "phone-number",
        email: "email",
        uniqueID: "id",
        partySize: "party-size",
    }
]




app.get("/", function(req, res){
    res.sendfile(path.join(__dirname, "index.html"))
})

app.get("/api/tables", function(req, res) {
    return res.json(reservations);
});

app.get("/add", function(req, res) {
    res.sendfile(path.join(__dirname, "reserve.html"))
})


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})