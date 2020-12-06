import events from "events";
import sendSlack from "./slack/sendSlack";

const slackEmitter = new events.EventEmitter();

slackEmitter.on("event", async(data: {message: string,}) => {
  try {
    await sendSlack(data.message, process.env.SLACK_API_URL!);

  } catch(error) {

    console.log(error.message);
  }
});

export default slackEmitter;