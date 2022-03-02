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
    if(state !== "yes_state") {
        return fallback(agent);
    }

    sessionHandler.addSessionParameters({
        state: "supplierChangeConfirmation_state",
        callTopic: "Lieferantenwechselbestätigung"
    })
    console.log("supplierChangeConfirmation_state")
    agent.add("Bitte teilen Sie uns Ihren Namen und Vornamen mit.")
}