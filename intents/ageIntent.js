import {WebhookClient} from 'dialogflow-fulfillment';
import {SessionHandler} from "../handler/sessionHandler.js";
import {fallback} from "./fallbackIntent.js";

/**
 * Default Welcome Intent
 *
 * @param {WebhookClient} agent
 */
export function ageIntent(agent){
    let sessionHandler = new SessionHandler(agent);
    let state = sessionHandler.getSessionParameter("state", null);
    if(state !== "await_age") {
        return fallback(agent);
    }

    let age = agent.parameters.number;
    if(age == null){
        return fallback(agent);
    }

    sessionHandler.addSessionParameters({
        state: "next_state",
        age: age
    })
    agent.add("Du bist " + age.toString() + " Jahre alt!");
}