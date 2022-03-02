import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../handler/sessionHandler.js";

/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function welcome(agent) { //Export = Public
    agent.add("Hallo Kollege! Wie alt bist du?");
    let sessionHandler = new SessionHandler(agent)
    sessionHandler.addSessionParameters({
        state: "await_age"
    })
}