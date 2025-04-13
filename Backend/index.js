import express from "express"
import mongoose from "mongoose";
import dotEnv from "dotenv"
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRout from "./route/user.route.js"

const app = express();

app.use(cors())
app.use(express.json())

dotEnv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);

}

// defining routes
app.use("/book", bookRoute)
app.use("/user", userRout)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})