import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";


/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function adress(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    // Handle Address of moveout and supplier change
    //#################################################################################################################
    if (!((state === "moveout_state_flr") || (state === "supplierChange_state_flr"))) {
        return fallback(agent);
    }
    if ((state === "moveout_state_flr") || (state === "supplierChange_state_flr")) {
        let adress = agent.parameters.adress;
        sessionHandler.setSessionParameter({
            state: "moveout_supplierChange_request_phone_email",
            adress: adress.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Telefonnummer oder E-Mail mit");
        console.log("Adresse: " + adress.toString());
    }
    //#################################################################################################################


}