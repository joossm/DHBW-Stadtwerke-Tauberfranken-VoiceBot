import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function fullName(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if (!((state === "MOC")
        || (state === "SOC")
        || (state === "MO")
        || (state === "SC")
        || (state === "MOC_FB"))) {
        return fallback(agent);
    }

    // INTENTS Auszugsbestätigung & Lieferantenwechselbestätigung & Auszug & Lieferantenwechsel
    if ((state === "MOC") || (state === "SOC") ||
        (state === "MO") || (state === "SC")) {
        // Erfassung des Vornamens und Nachnamens des Anrufers
        let firstname = agent.parameters.firstname;
        if (firstname == null) {
            return fallback(agent);
        }
        let lastname = agent.parameters.lastname;
        if (lastname == null) {
            return fallback(agent);
        }
        let newState = state + "_NAME";
        sessionHandler.addSessionParameters({
            state: newState.toString(),
            firstname: firstname.toString(),
            lastname: lastname.toString()
        })
        console.log("Name: " + firstname.toString() + " " + lastname.toString())


        if ((state === "MOC") || (state === "SOC")) {
            agent.add("Bitte teilen Sie uns die auf dem Anschreiben angedruckte Kundennummer beginnend mit 1 mit.  Bitte antworten Sie in einem vollständigen Satz.")
        }
        if ((state === "MO") || (state === "SC")) {
            agent.add("Bitte teilen Sie uns ihre Adresse im Format Straße, Hausnummer, Postleitzahl und Stadt mit.")
        }
    }


    // INTENTS Auszugsbestätigung
    if (state === "MOC_FB") {
        // Erfassung Name des Nachmieters
        let firstname = agent.parameters.firstname;
        let lastname = agent.parameters.lastname;
        let fullname = firstname + " " + lastname;
        sessionHandler.addSessionParameters({
            state: "MOC_NT",
            nameNewTenant: fullname.toString()
        })
        console.log("Name: " + firstname.toString() + " " + lastname.toString())

        agent.add("Bitte teilen Sie uns die Zählernummer mit. Bitte antworten Sie in ganzen Sätzen.")
    }


}