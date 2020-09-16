const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});
app.post('/', function(request, response){
    console.log(request.body);
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let result1 = num2 * num2;
    let result = num1 / result1;
    console.log(`${num2} * ${num2} = ${result1}`);
    console.log(`${num1} /  ${result1} = ${result}`)
    response.send(`${result}`);
});
app.listen(8000, function(){
    console.log('Server is running on Port 8000');
})