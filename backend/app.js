import e from "express";
import { productRoutes } from "./modules/products/routes/product-routes.js";
import cors from "cors";
import dotenv from "dotenv";
import { createConnection } from "./utils/connection.js";


const app = e();

dotenv.config();
app.use(e.json());
app.use(cors())
app.use('/',productRoutes)

const promise = createConnection();
const PORT = 8000;
promise.then(r=>{
    app.listen(PORT, err=>{
        if(err){
            console.log("application crash");
        }else{
            console.log("application up and running");
        }
    })
}).catch(err=>{
    console.log("error in db connection", err);
})

