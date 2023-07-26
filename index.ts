import express, { Express } from "express";
import helmet from "helmet";
import cors from "cors";
import hpp from "hpp";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import bodyParser from "body-parser";
import { fib } from "./middleware/fib";
const app: Express = express();
const port = 3000;

// Set security headers
app.use(helmet());

// Prevent Cross Site Scripting 
app.use(xss());

// Prevent http polution 
app.use(hpp());

//Enable CORS 
app.use(cors());


// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))

//Rate limiting 
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 100
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const memo = {};

// Post Message
app.post("/", (req, res) => {
    const { number } = req.body;
    try{
        const answer = fib(number, memo);
         console.log("Req 1", number, memo);
        res.status(200).json({ status: true, answer, list: memo })

    } catch(error){
      res.status(500).json({ status: false, error })
    }
});




app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});