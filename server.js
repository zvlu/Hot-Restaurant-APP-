const express = require('express')


const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(req, res){
    res.sendfile(path.join(__dirname, "index.html"))
})


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})