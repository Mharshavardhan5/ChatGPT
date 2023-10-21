import  express  from "express";
import {config} from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";

config();


const app=express();

// remove it in the production
app.use(morgan("dev"))

app.use("/api/v1",appRouter);

//middlewares
app.use(express.json())




//connections and listeneres


export  default app;