const express = require("express");
const {lwcase,upcase} = require('./texto');
const app = express();
const port = 3000;
app.use(express.json());
app.post('/lowercase',function (resq, resp) {
        const action = "lowercase";
        const { dados } = resq.body;
        const result = {
            action,
            input: dados,
            output: lwcase(dados),
        };
        console.log(result);
        resp.json(result);
    })
app.post("/uppercase",(req,res) =>{
    const action = "uppercase"
    const {dados} = req.body;
    const result = {
        action,
        input: dados,
        output: upcase(dados)
    }
    res.json(result);
})
app.listen(port, () =>{
    console.log('App running at http://localhost:3000');
})