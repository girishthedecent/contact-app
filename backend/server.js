import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

if (!process.env.MONGO_URL) {
    console.error("Missing env variables");
    process.exit(1);
}

const app = express();

const allowedOrigins = [
    "http://localhost:5173",
    process.env.CLIENT_URL
];




app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "DELETE"]
}))



app.disable("x-powered-by"); //prevent unneccesary information leakage


app.use(express.json({ limit: "10kb" }));

app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});


app.use("/api/contacts", contactRoutes);





const PORT = process.env.PORT || 3000;


const start = async () => {

    try {
        //Connecting Database
        const connectionDb = await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to db ${connectionDb.connection.host}`);

        //Starting backend
        app.listen(PORT, () => {
            console.log(`server is listening on port ${PORT}`);
        })
    }

    catch (err) {
        console.error(`failed to start server`, err.message);
        process.exit(1);

    }

}

start();




