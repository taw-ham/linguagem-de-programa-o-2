const {maior,menor} = require('./maior_menor');
const express = require('express');
const app = express();
const port = 3000;
app.get('/minimum',(req,res) =>{
    let input = req.query.input;
    input = input.split(',');
    const action = "minimum";
    let valores = [];
    for(let i = 0; i <= input.length -1; i++){
        valores.push(parseInt(input[i]))
    }
    console.log(valores)
    const result = {
        action,
        input: valores,
        minimum: menor(valores),
    }
    console.log(result)
    res.json(result);

})
app.get('/maximum',(req,resp) =>{
    let input = req.query.input;
    input = input.split(",");
    let valores = [];
    const action = "maximum";
    for(let i = 0; i <= input.length -1; i++){
        valores.push(parseInt(input[i]));
    }
    const result = {
        action,
        input: valores,
        output: maior(valores)
    };
    resp.json(result);
})
app.listen(port,() =>{
    console.log(`app is running is port: ${port}`)
})

