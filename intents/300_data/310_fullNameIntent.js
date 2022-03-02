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
    if (!((state === "moveoutConfirmation_state") || (state === "supplierChangeConfirmation_state") ||
        (state === "moveout_state") || (state === "supplierChange_state") || (state === "moveoutConfirmation_state_request_newTenant"))) {
        return fallback(agent);
    }

    // Get the caller name
    // ##############################################################################################################################
    if ((state === "moveoutConfirmation_state") || (state === "supplierChangeConfirmation_state") ||
        (state === "moveout_state") || (state === "supplierChange_state")) {

        let firstname = agent.parameters.firstname;
        if (firstname == null) {
            return fallback(agent);
        }
        let lastname = agent.parameters.lastname;
        if (lastname == null) {
            return fallback(agent);
        }
        let newState = state + "_flr"
        sessionHandler.addSessionParameters({
            state: newState.toString(),
            firstname: firstname.toString(),
            lastname: lastname.toString()
        })
        console.log("Name: " + firstname.toString() + " " + lastname.toString())


        if ((state === "moveoutConfirmation_state") || (state === "supplierChangeConfirmation_state")) {
            agent.add("Bitte teilen Sie uns die auf dem Anschreiben angedruckte Kundennummer beginnend mit 1 mit.")
        }
        if ((state === "moveout_state") || (state === "supplierChange_state")) {
            agent.add("Bitte teilen Sie uns ihre Adresse im Format Straße, Hausnummer, Postleitzahl und Stadt mit.")
        }
    }
    // ##############################################################################################################################


    // New tenant for moveout confirmation
    // ##############################################################################################################################
    if (state === "moveoutConfirmation_state_request_newTenant") {

        let firstname = agent.parameters.firstname;
        if (firstname == null) {
            return fallback(agent);
        }
        let lastname = agent.parameters.lastname;
        if (lastname == null) {
            return fallback(agent);
        }

        sessionHandler.addSessionParameters({
            state: "moveoutConfirmation_state_request_meterNumber",
            firstname: firstname.toString(),
            lastname: lastname.toString()
        })
        console.log("Name: " + firstname.toString() + " " + lastname.toString())

        agent.add("Bitte teilen Sie uns die Zählernummer mit. Bitte antworten Sie in ganzen Sätzen.")
    }
    // ##############################################################################################################################


}