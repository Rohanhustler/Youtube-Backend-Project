// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import connectDB from "./db/index.js";
import {app} from './app.js';
import { asyncHandler } from './utils/asyncHanlder.js';


const wrappedAsyncOperation = asyncHandler();
wrappedAsyncOperation()
.then(() => {
    app.on("error", (error) => {
        console.log("Server Connection Error : ", error);
    })
    app.listen(process.env.PORT, () => {
        console.log(`server is running on PORT ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("ERRO", error);
})

/*
connectDB()
.then((response) => {
    app.on("error", (error) => {
        console.error("ERROR , Server is not responding currently, kindly check try to connect after sometimes", error);
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port : ${process.env.PORT}`)
    })
})
.catch((error) => console.log("MONGO DB connection failed !!!", error))


*/
/*
import express from "express";
const app = express();

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: app is not able to listen the request right now , kindly retry it after some time", error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is running on port ${process.env.PORT}`);
        })
    } catch(error) {
        console.error("ERROR", error);
        throw error;
    }
})();
*/