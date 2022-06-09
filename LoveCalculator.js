const express = require('express');
const bodyParser = require('body-parser');
let app = express();

// add body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//import calculator function
const calculator = require("./Calculator.js").calculator;

app.post("/api",(req,res)=>
{
    var name = req.body.name;
    var crush = req.body.crush;

    var result = calculator(name,crush);

   switch(result){
        case 60:
            res.send(`${result}% Good enough. Might as well check love off your list of things society believes you should've accomplished by now.`);
        break;
        case 80:
        case 100: 
        res.send(`${result}% Your love burns as hot as the sun, blazing through the vastness of space, and searing itself into your being`);
        break;
        default :
        res.send(`${result}% Love like this can be seen in the eyes of a dog wanting to continue playing fetch with its exhausted owner – longing, yet not currently viable.`);
    }
});

app.listen(3000);