import * as dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';


dotenv.config({path: './env'})

connectDB()
.then(() => {
    // console.log(res)
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`🔴 server running or port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('Mongodb connection failed!!!', err)
})
