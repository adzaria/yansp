import events from "events";
import sendSlack from "./slack/sendSlack";
import log from "../helpers/log";

const slackEmitter = new events.EventEmitter();

slackEmitter.on("event", async(data: {message: string,}) => {
  try {
    await sendSlack(data.message, process.env.SLACK_API_URL!);

  } catch(error) {

    log(error.message);
  }
});

export default slackEmitter;