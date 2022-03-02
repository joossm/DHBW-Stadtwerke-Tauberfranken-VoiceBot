import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";

export function date(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    if (!((state === "moveoutConfirmation_state_request_meterReadingDate")
        || (state === "supplierChangeConfirmation_request_meterReadingDate"))) {
        return fallback(agent);
    }
    // TODO: date problem solving
    // Handle meter reading date of moveout confirmation
    //#################################################################################################################
    if (state === "moveoutConfirmation_state_request_meterReadingDate") {
        let readingDate = agent.parameters.date.toString();
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_proof",
            readingDate: readingDate.toString()
        });
        agent.add("ENDE VORERST");
        console.log("Zählernummer: " + readingDate.toString());
    }

    // Handle meter reading date of  supplier change confirmation
    //#################################################################################################################
    if (state === "moveoutConfirmation_state_request_meterReadingDate") {
        let readingDate = agent.parameters.date.toString();
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_proof",
            readingDate: readingDate.toString()
        });
        agent.add("ENDE VORERST");
        console.log("Zählernummer: " + readingDate.toString());
    }
}