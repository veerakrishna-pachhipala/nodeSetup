import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';

import db from './services/dbConnection';
import userRouter from './routes/users.router';




const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(helmet());

app.use('/users',userRouter)
app.get("/",(req,res,next)=>{
    res.send("Welcome to Docs");
});


app.use((req, res, next) => {
    res.status(404).json({
        status: 404,
        message: 'Page Not Found'
    })
})

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({
        status: 500,
        message: 'Oops something went wrong..'
    })
})

export default app;