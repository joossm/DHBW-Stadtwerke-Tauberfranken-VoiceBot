/*
Zählernummer
Zählerstand
Marktlokation oder Zählernummer
Zählerstände*/

import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";

export function number(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    if (!((state === "moveout_supplierChange_request_meterNumber") || (state === "moveout_supplierChange_request_meterReading")
        || (state === "supplierChangeConfirmation_state_flr") || (state === "moveoutConfirmation_state_flr") ||
        (state === "supplierChangeConfirmation_request_meterNumber") || (state === "supplierChangeConfirmation_request_meterReading")
        || (state === "moveoutConfirmation_state_request_meterNumber") || (state === "moveoutConfirmation_state_request_meterReading"))) {
        return fallback(agent);
    }

    // Handle meter number of moveout and supplier change
    //#################################################################################################################
    if (state === "moveout_supplierChange_request_meterNumber") {
        let meterNumber = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_meterReading",
            meterNumber: meterNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihren Zählerstand mit. Bitte in einem Vollständigen Satz.");
        console.log("Zählernummer: " + meterNumber.toString());
    }
    //#################################################################################################################


    // Handle meter reading of moveout and supplier change
    //#################################################################################################################
    if (state === "moveout_supplierChange_request_meterReading") {
        let meterReading = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_meterAdress",
            meterReading: meterReading.toString()
        });
        agent.add("Bitte teilen Sie uns die Adresse des Gebäudes in dem der Zähler eingebaut ist mit.");
        console.log("Zählerstand: " + meterReading.toString());
    }
    //#################################################################################################################

    // Handle customer number of  supplier changeConfirmation
    //#################################################################################################################
    if (state === "supplierChangeConfirmation_state_flr") {
        let customerNumber = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "supplierChangeConfirmation_request_phoneNumber_or_email",
            customerNumber: customerNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Telefonnummer oder E-Mail mit. Bitte antworten Sie in einem vollständigen Satz.");
        console.log("Kundennummer: " + customerNumber.toString());
    }
    //#################################################################################################################


    // Handle customer number of moveoutconfirmation
    //#################################################################################################################
    if (state === "moveoutConfirmation_state_flr") {
        let customerNumber = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "moveoutConfirmation_state_request_phoneNumber_or_email",
            customerNumber: customerNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihre Telefonnummer oder E-Mail mit. Bitte antworten Sie in einem vollständigen Satz.");
        console.log("Kundennummer: " + customerNumber.toString());
    }
    //#################################################################################################################


    // Handle meter number of supplier change confirmation
    //#################################################################################################################
    if (state === "supplierChangeConfirmation_request_meterNumber") {
        let meterNumber = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "supplierChangeConfirmation_request_meterReading",
            meterNumber: meterNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihren Zählerstand mit. Bitte in einem Vollständigen Satz.");
        console.log("Zählernummer: " + meterNumber.toString());
    }
    //#################################################################################################################

    // Handle meter number of supplier change confirmation
    //#################################################################################################################
    if (state === "supplierChangeConfirmation_request_meterReading") {
        let meterReading = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "supplierChangeConfirmation_request_meterReadingDate",
            meterReading: meterReading.toString()
        });
        agent.add("Bitte teilen Sie uns das Ablesedatum mit. Bitte antworten Sie in einem vollständigen Satz.");
        console.log("Zählerstand: " + meterReading.toString());
    }
    //#################################################################################################################

    // Handle meter number of moveout confirmation

    //#################################################################################################################
    if (state === "moveoutConfirmation_state_request_meterNumber") {
        let meterNumber = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "moveoutConfirmation_state_request_meterReading",
            meterNumber: meterNumber.toString()
        });
        agent.add("Bitte teilen Sie uns ihren Zählerstand mit. Bitte in einem Vollständigen Satz.");
        console.log("Zählernummer: " + meterNumber.toString());
    }
    //#################################################################################################################

    // Handle meter reading of moveout confirmation
    //#################################################################################################################
    if (state === "moveoutConfirmation_state_request_meterReading") {
        let meterReading = agent.parameters.number;
        sessionHandler.addSessionParameters({
            state: "moveoutConfirmation_state_request_meterReadingDate",
            meterReading: meterReading.toString()
        });
        agent.add("Bitte teilen Sie uns das Ablesedatum mit. Bitte antworten Sie in einem vollständigen Satz.");
        console.log("Zählerstand: " + meterReading.toString());
    }
    //#################################################################################################################
}