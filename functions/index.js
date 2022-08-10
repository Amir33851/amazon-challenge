const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HoNAJJ6zlhCKixlzSQC8QM9v1b1HMkm7pcTMihSWl3ZIKxRZWvvGf6OeksYXJD8WmU9RED40myPGTSm8t0ef91s00e3v4n4FP");

// API


// App Config
const app = express();

// Middlewates
app.use(cors({origin:true}));
app.use(express.json());

// API routes
app.get('/',(request,response)=>response.status(200).send("hello world"))

// Listen command
exports.api = functions.https.onRequest(app);


