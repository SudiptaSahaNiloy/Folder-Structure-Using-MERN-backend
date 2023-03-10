const express = require('express');
const app = express();
const fileRouter = require('./routers/fileRouters');
const mongoose = require('mongoose');
const cors = require("cors");

mongoose.set('strictQuery', true);

mongoose.connect("mongodb+srv://sudiptasahaniloy:bangladesh305968@prescriptiongeneratordb.drn0ztj.mongodb.net/FileManager?w=majority")
    .then(() => console.log("Connected to MONGO DB"))
    .catch(() => console.log("Failed to connect"));

app.use(cors());
app.use(express.json());
app.use('/files', fileRouter); //for the router in locationrouter

const port = 8000;

app.listen(port, () => {
    console.log("Listening on port 8000......");
})