import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function address(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    if (!((state === "moveout_state_flr") || (state === "supplierChange_state_flr") || (state === "moveout_supplierChange_request_meterAdress"))) {
        return fallback(agent);
    }

    // Handle Address of moveout and supplier change
    //#################################################################################################################
    if ((state === "moveout_state_flr") || (state === "supplierChange_state_flr")) {

        let address = agent.parameters.address.toString();
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_phone_email",
            adress: address.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Telefonnummer oder E-Mail mit. Bitte in antworten Sie in einem vollständigen Satz.");
        // TODO: Add address
        console.log("Adresse: " +address.toString());
    }
    //#################################################################################################################

    // Handle Address where the meter ist built in
    // #################################################################################################################
    if (state === "moveout_supplierChange_request_meterAdress") {
        let address = agent.parameters.address;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_checkall",
            adressOfMeter: address.toString()
        });
        console.log("Adresse Zähler: " + address.toString());

        console.log(sessionHandler.getAllSessionParametersAsAString());
        agent.add("Sind alle Angaben korrekt?");
        agent.add(sessionHandler.getAllSessionParametersAsAString());

    }
    //#################################################################################################################


}