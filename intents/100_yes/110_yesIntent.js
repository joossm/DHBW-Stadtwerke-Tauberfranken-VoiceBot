import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function yes(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if (state !== "start_state") {
        return fallback(agent);
    }

    agent.add("Handelt es sich bei dem Anschreiben um eine Auszugsbestätigung oder Lieferantenwechselbestätigung?")

    sessionHandler.addSessionParameters({
        state: "yes_state",

    })
    console.log("yes_state")
}