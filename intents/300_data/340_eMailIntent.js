import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";

export function eMail(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    // Handle email of moveout and supplier change
    //#################################################################################################################
    if (!(state === "moveout_supplierChange_request_phone_email")) {
        return fallback(agent);
    }
    if (state === "moveout_supplierChange_request_phone_email") {
        let email = agent.parameters.email;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_meterNumber",
            phone: email
        });
        agent.add("Bitte teilen Sie uns ihre Zählernummer mit. Bitte in einem vollständigen Satz.");
        console.log("E-Mail: " + email.toString());
    }
    //#################################################################################################################


}