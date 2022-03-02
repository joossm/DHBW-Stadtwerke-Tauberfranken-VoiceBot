import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function no(agent) {
    agent.add("Bitte teilen Sie uns den Grund für Ihre Ablesung mit, handelt es sich um einen Auszug oder Lieferantenwechsel?")
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if (state !== "start_state") {
        return fallback(agent);
    }

    sessionHandler.addSessionParameters({
        state: "no_state",

    })
    console.log("no_state")
}