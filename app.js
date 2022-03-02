'use strict';
import express from 'express';

import {welcome} from "./intents/defaultWelcomeIntent.js";
import {fallback} from "./intents/fallbackIntent.js";
import {WebhookClient} from "dialogflow-fulfillment";
import {ageIntent} from "./intents/ageIntent.js";


const app = express();


app.post("/webhook", express.json(), (req, res) => {
    // --------------------------------------------------------------------------
    // CREATE WEBHOOKCLIENT (AGENT)
    // --------------------------------------------------------------------------
    const agent = new WebhookClient({
        request: req,
        response: res
    });


    // --------------------------------------------------------------------------
    // MAPPING INTENTS
    // --------------------------------------------------------------------------
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('age Intent', ageIntent);

    return agent.handleRequest(intentMap);
})

app.listen(8080, () => console.log("Server is live at port 8080!"));

// Falls 8080 belegt
// netstat -ano | findstr :8080
// taskkill /PID [task id] /F
//
// ngrok beenden
// taskkill /f /im ngrok.exe
//
// ngrok http 8080
// To RUN the APP:
// node app.js

// Add to package.json
// below main
//  "type": "module",