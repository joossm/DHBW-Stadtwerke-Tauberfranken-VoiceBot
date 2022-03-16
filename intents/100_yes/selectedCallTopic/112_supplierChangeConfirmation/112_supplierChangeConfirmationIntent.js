import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../../../handler/sessionHandler.js";
import {fallback} from "../../../999_fallbackIntent.js";

/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function supplierChangeConfirmation(agent){
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if(state !== "START_YES") {
        return fallback(agent);
    }

    sessionHandler.addSessionParameters({
        state: "SOC",
        callTopic: "Lieferantenwechselbestätigung"
    })
    console.log("SOC")
    agent.add("Bitte teilen Sie uns Ihren Vornamen und Nachnamen mit.")
}