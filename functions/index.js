const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51LbLkQSAO6jyxvsA3QfiUrJ6ccsUu0yfJsGemI2zDvzd8p5VZS5PdWhqzOWPm2wwA3Th5UhazPCQQDMuIomaRac900onJBoMLD"
);
// eslint-disable-next-line max-len


// API

// -App Config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());


// -Api Routes
app.get("/", (_request, response)=>response.status(200).send("Hello World"));
app.get("/rahul", (_request, response)=>response.status(200).send("Hello Rahul"));
app.post("/payments/create", async (request,response)=>{
        const total=request.query.total;
        console.log('payment request recieved', total);  

        const paymentIntent=await stripe.paymentIntents.create({
            amount:total,
            currency:'inr'
        });

        response.status(201).send({
            clientSecret:paymentIntent.client_secret,
        })
});
// -Listened command
exports.api=functions.https.onRequest(app);

// Example Endpoint
// (http://localhost:5001/clone-5f0f0/us-central1/api
