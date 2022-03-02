import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../handler/sessionHandler.js";

/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function welcome(agent) { //Export = Public
    agent.add("Hallo hier ist der Netzservice des Stadtwerks Tauberfranken!\n" +
        "Sie wollen einen Zählerstand melden - wurden Sie hierzu von uns angeschrieben?");
    let sessionHandler = new SessionHandler(agent)
    sessionHandler.addSessionParameters({
        state: "start_state"
    })
}