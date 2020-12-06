const request = require('request');

export default async(text: string, url: string) => {
  try{
    if(process.env.MODE==="production") {
      request.post({
        headers: {'Content-type': 'application/json'}, url, form: {
          payload: JSON.stringify({
            "text": text,
          }),
        },
      }, (error: any, res: any, body: any) => {});
    } else {
      console.log(`SLACK ${text}`);
    }
  } catch(error) {
    console.log(error.message);
  }
}