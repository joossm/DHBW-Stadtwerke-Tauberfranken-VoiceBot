import {WebhookClient} from "dialogflow-fulfillment";
import {SessionHandler} from "../handler/sessionHandler.js";

/**
 * Default Fallback Intent
 *
 * @param {WebhookClient} agent
 */
export function fallback(agent){
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state");
    agent.add("Sorry, das habe ich nicht verstanden. State: " + state);
}