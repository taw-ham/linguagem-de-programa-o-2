const express = require('express');
const port = 3000;
const app = express();
app.get('/',(req,res) =>{
    res.send("HELLO WORLD")

})
app.listen(port,() =>{
    console.log(`server running is port: ${port}`)
})