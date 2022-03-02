import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../../../handler/sessionHandler.js";
import {fallback} from "../../../999_fallbackIntent.js";

/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function supplierChange(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if (state !== "no_state") {
        return fallback(agent);
    }

    sessionHandler.addSessionParameters({
        state: "supplierChange_state",
        callTopic: "Lieferantenwechsel"
    })
    console.log("supplierChange_state")
    agent.add("Bitte teilen Sie uns Ihren Namen und Vornamen mit.")
}