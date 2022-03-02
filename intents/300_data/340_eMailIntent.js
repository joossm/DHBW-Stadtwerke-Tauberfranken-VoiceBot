import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";

export function eMail(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    // Handle email of moveout and supplier change
    //#################################################################################################################
    if (!((state === "moveout_supplierChange_request_phone_email") || (state === "moveoutConfirmation_state_request_phoneNumber_or_email") || (state === "supplierChangeConfirmation_request_phoneNumber_or_email"))) {
        return fallback(agent);
    }
    if (state === "moveout_supplierChange_request_phone_email") {
        let email = agent.parameters.email;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_meterNumber",
            email: email.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Zählernummer mit. Bitte in einem vollständigen Satz.");
        console.log("E-Mail: " + email.toString());
    }
    //#################################################################################################################

    // Handle email of moveout and supplier change
    //#################################################################################################################

    if (state === "moveoutConfirmation_state_request_phoneNumber_or_email") {
        let email = agent.parameters.email;
        sessionHandler.addSessionParameters({
            state: "moveoutConfirmation_state_request_adressFinalBill",
            email: email.toString()
        });
        agent.add("Bitte teilen Sie uns ihre neue Adresse für die Schlußrechnung mit.");
        console.log("E-Mail: " + email.toString());
    }
    //#################################################################################################################


    // Handle email of moveout and supplier change
    //#################################################################################################################

    if (state === "supplierChangeConfirmation_request_phoneNumber_or_email") {
        let email = agent.parameters.email;
        sessionHandler.addSessionParameters({
            state: "supplierChangeConfirmation_request_meterNumber",
            email: email.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Zählernummer mit. Bitte in einem vollständigen Satz.");
        console.log("E-Mail: " + email.toString());
    }
    //#################################################################################################################
}