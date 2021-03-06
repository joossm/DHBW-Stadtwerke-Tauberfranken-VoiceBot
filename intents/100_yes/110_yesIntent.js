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
    if (!((state === "MOC_MRD")
        || (state === "SCC_MRD")
        || (state === "MO_SC_MA")
        || (state === "START"))) {
        return fallback(agent);
    }

    // START INTENT
    if (state === "START") {
        agent.add("Handelt es sich bei dem Anschreiben um eine Auszugsbestätigung oder Lieferantenwechselbestätigung?")

        sessionHandler.addSessionParameters({
            state: "START_YES",
        })
        console.log("START_YES")
    }

    if ((state === "MOC_MRD") || (state === "SCC_MRD") || (state === "MO_SC_MA")) {
        agent.end("Vielen Dank für Ihren Anruf. Sie können nun auflegen.")
    }

}