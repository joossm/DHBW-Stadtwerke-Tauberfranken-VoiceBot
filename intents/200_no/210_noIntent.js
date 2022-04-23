import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function no(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if (!((state === "MOC_MRD")
        || (state === "SCC_MRD")
        || (state === "MO_SC_MA")
        || (state === "START"))) {
        return fallback(agent);
    }
    if (state === "START" ) {
        agent.add("Bitte teilen Sie uns den Grund für Ihre Ablesung mit, handelt es sich um einen Auszug oder Lieferantenwechsel?")
        sessionHandler.addSessionParameters({
            state: "START_NO"
        })

        console.log("START_NO")
    }

    if ((state === "MOC_MRD") || (state === "SCC_MRD") || (state === "MO_SC_MA")) {
        agent.end("Bitte warten Sie, wir verbinden Sie in kürze mit einem unserer Kundenbetreuer.")
    }

}