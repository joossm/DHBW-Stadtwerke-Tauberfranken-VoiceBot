import {WebhookClient} from "dialogflow-fulfillment";
import {SessionHandler} from "../handler/sessionHandler.js";

/**
 * Default Fallback Intent
 *
 * @param {WebhookClient} agent
 */
export function fallback(agent) {
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state");
    let sessionParameterIntent = sessionHandler.getSessionParameter("intent");
    if (sessionParameterIntent === "3") {
        agent.add("Ich habe dich leider zu oft nicht verstanden. Du wirst mit dem Kundenservice verbunden.!");
    } else {
        if (sessionParameterIntent === "0") {
            sessionHandler.addSessionParameters({
                intent: "1"
            });
            agent.add("Sorry, das habe ich nicht verstanden. State: " + state);
        }
        if (sessionParameterIntent === "1") {
            sessionHandler.addSessionParameters({
                intent: "2"
            });
            agent.add("Sorry, das habe ich nicht verstanden. State: " + state);
        }
        if (sessionParameterIntent === "2") {
            sessionHandler.addSessionParameters({
                intent: "3"
            });
            agent.add("Sorry, das habe ich nicht verstanden. State: " + state);
        }
    }


}