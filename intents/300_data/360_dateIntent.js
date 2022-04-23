import {SessionHandler} from "../../handler/sessionHandler.js";
import {fallback} from "../999_fallbackIntent.js";

export function date(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);

    if (!((state === "MOC_MR") ||
        (state === "SCC_MR"))) {
        return fallback(agent);
    }
    // TODO: Alle Eingaben überprüfen
    // TODO: date problem solving
    // INTENTS Auszugsbestätigung
    if (state === "MOC_MR") {
        // Erfassung des Ablesedatums
        let readingDate = agent.parameters.date.toString();
        sessionHandler.addSessionParameters({
            state: "MOC_MRD",
            meterReadingDate: readingDate.toString()
        });
        console.log("Ablesedatum: " + readingDate.toString());



        agent.add("Bitte überprüfen Sie die Daten:");
        agent.add("Anrufgrund: " + sessionHandler.getSessionParameter("callTopic").toString());
        agent.add("Name: " + sessionHandler.getSessionParameter("firstname").toString() + " "
            + sessionHandler.getSessionParameter("lastname").toString());
        agent.add("Kundennummer: " + sessionHandler.getSessionParameter("customerNumber").toString());
        agent.add("E-Mail oder Telefonnummer: " + sessionHandler.getSessionParameter("emailorphone").toString());
        agent.add("Adresse für Schlußrechnung: " + sessionHandler.getSessionParameter("addressForFinalBill").toString());
        agent.add("Name des Nachmieters oder Eigentümers: " + sessionHandler.getSessionParameter("nameNewTenant").toString());
        agent.add("Zählernummer oder Marktlokation: " + sessionHandler.getSessionParameter("meterNumber").toString());
        agent.add("Zählerstand: " + sessionHandler.getSessionParameter("meterReading").toString());
        agent.add("Ablesedatum: " + sessionHandler.getSessionParameter("meterReadingDate").toString());
        agent.add("Sind alle Angaben korrekt?");

    }

    // INTENTS Lieferantenwechselbestätigung
    if (state === "SCC_MR") {
        // Erfassung des Ablesedatums
        let readingDate = agent.parameters.date.toString();
        sessionHandler.addSessionParameters({
            state: "SCC_MRD",
            meterReadingDate: readingDate.toString()
        });
        console.log("Ablesedatum: " + readingDate.toString());

        // TODO: Alle Eingaben überprüfen
        agent.add("Bitte überprüfen Sie die Daten:");
        agent.add("Anrufgrund: " + sessionHandler.getSessionParameter("callTopic").toString());
        agent.add("Name: " + sessionHandler.getSessionParameter("firstname").toString()+ " "
            + sessionHandler.getSessionParameter("lastname").toString());
        agent.add("Kundennummer: " + sessionHandler.getSessionParameter("customerNumber").toString());
        agent.add("E-Mail oder Telefonnummer: " + sessionHandler.getSessionParameter("emailorphone").toString());
        agent.add("Zählernummer oder Marktlokation: " + sessionHandler.getSessionParameter("meterNumber").toString());
        agent.add("Zählerstand: " + sessionHandler.getSessionParameter("meterReading").toString());
        agent.add("Ablesedatum: " + sessionHandler.getSessionParameter("meterReadingDate").toString());
        agent.add("Sind alle Angaben korrekt?");


    }
}


/* if (state === "moveoutConfirmation_state_request_meterReadingDate") {
        let readingDate = agent.parameters.date.toString();
        sessionHandler.addSessionParameters({
            state: "moveout_supplierChange_request_proof",
            meterReadingDate: readingDate.toString()
        });
        console.log("Zählernummer: " + readingDate.toString());


        let customer = new Customer();
        customer.setAllParameters(
            sessionHandler.getSessionParameter("callTopic"),
            sessionHandler.getSessionParameter("firstname"),
            sessionHandler.getSessionParameter("lastname"),
            sessionHandler.getSessionParameter("address"),
            sessionHandler.getSessionParameter("emailorphone"),
            sessionHandler.getSessionParameter("customerNumber"),
            sessionHandler.getSessionParameter("newTenantName"),
            sessionHandler.getSessionParameter("addressForFinalBill")
            sessionHandler.getSessionParameter("meterNumber")
            sessionHandler.getSessionParameter("meterReading")
            sessionHandler.getSessionParameter("meterReadingDate")
            sessionHandler.getSessionParameter("meterReadingAddress")
        );

        agent.add("Bitte überprüfen Sie die Daten. ");
        agent.add("Anrufgrund: " +  sessionHandler.getSessionParameter("callTopic"));
        agent.add("Vorname: " + getSessionParameter("firstname"));
        agent.add("Nachname: " +sessionHandler.getSessionParameter("lastname"));
        agent.add("Adresse: " + sessionHandler.getSessionParameter("address"));
        agent.add("E-Mail oder Telefonnummer: " + sessionHandler.getSessionParameter("emailorphone"));
        agent.add("Kundennummer: " +  sessionHandler.getSessionParameter("customerNumber"));
        agent.add("Neuer Mieter: " + sessionHandler.getSessionParameter("newTenantName"));
        agent.add("Adresse für Rechnung: " + sessionHandler.getSessionParameter("addressForFinalBill"));
        agent.add("Zählernummer: " +sessionHandler.getSessionParameter("meterNumber"));
        agent.add("Zählerstand: " + sessionHandler.getSessionParameter("meterReading"));
        agent.add("Zählerstandsdatum: " + sessionHandler.getSessionParameter("meterReadingDate"));
        agent.add("Zählerstandsadresse: " + sessionHandler.getSessionParameter("meterReadingAddress"));

    } */
