import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function phoneNumber(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    // Handle phone number of moveout and supplier change
    //#################################################################################################################
    if (!((state === "moveout_supplierChange_request_phone_email"))) {
        return fallback(agent);
    }
    if (state === "moveout_supplierChange_request_phone_email") {
        let phoneNumber = agent.parameters.phonenumber;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_meterNumber",
            phone: phoneNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Zählernummer mit. Bitte in einem vollständigen Satz.");
        console.log("Telefonnummer: " + phoneNumber.toString());
    }
    //#################################################################################################################


}