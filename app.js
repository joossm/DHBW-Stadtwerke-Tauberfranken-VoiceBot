'use strict';
import express from 'express';

import {welcome} from "./intents/000_welcomeIntent.js";
import {fallback} from "./intents/999_fallbackIntent.js";
import {WebhookClient} from "dialogflow-fulfillment";
import {
    moveoutConfirmation
} from "./intents/100_yes/selectedCallTopic/111_moveoutConfirmation/111_moveoutConfirmationIntent.js";
import {yes} from "./intents/100_yes/110_yesIntent.js";
import {
    supplierChangeConfirmation
} from "./intents/100_yes/selectedCallTopic/112_supplierChangeConfirmation/112_supplierChangeConfirmationIntent.js";
import {no} from "./intents/200_no/210_noIntent.js";
import {supplierChange} from "./intents/200_no/selectedCallTopic/212_supplierChange/212_supplierChangeIntent.js";
import {moveout} from "./intents/200_no/selectedCallTopic/211_moveout/211_moveoutIntent.js";
import {fullName} from "./intents/300_data/310_fullNameIntent.js";
import {adress} from "./intents/300_data/320_adressIntent.js";


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
    intentMap.set('000_welcomeIntent', welcome);
    intentMap.set('100_yesIntent', yes);
    intentMap.set('111_moveoutConfirmationIntent', moveoutConfirmation);
    intentMap.set('112_supplierChangeConfirmationIntent', supplierChangeConfirmation);
    intentMap.set('210_noIntent', no);
    intentMap.set('211_moveoutIntent', moveout);
    intentMap.set('212_supplierChangeIntent', supplierChange);
    intentMap.set('310_fullNameIntent', fullName);
    intentMap.set('320_adressIntent', adress);
    intentMap.set('330_phoneNumberIntent', phoneNumber);
    intentMap.set('340_eMailIntent', eMail);
    intentMap.set('999_fallbackIntent', fallback);


    return agent.handleRequest(intentMap);
})

app.listen(8080, () => console.log("Server is live at port 8080!"));

