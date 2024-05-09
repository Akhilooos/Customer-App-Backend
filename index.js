import express from "express";
import connectDb from "./db/db-connection.js";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/customer',router);

const connectServer = async () => {
    try {
        
        await connectDb();
        app.listen(5500, () => {
            console.log("Connected to the server");
        });
    } catch (error) {
        console.log("Cannot start the server.", error);
    }
};

connectServer();
