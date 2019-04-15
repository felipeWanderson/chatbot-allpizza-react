const functions = require('firebase-functions');
const watson = require('watson-developer-cloud/assistant/v1');
require('dotenv').config();

//export const helloWorld = https.onRequest((request, response) => {
//response.send("Hello from ChatBot!");
//});

const chatbot = new watson({
    'version': process.env.VERSION,
    'url':process.env.URL,
    'iam_apikey':  process.env.IAM_APIKEY,
    'iam_url': 'https://iam.bluemix.net/identity/token'
});

const workspace_id = process.env.WORKSPACE_ID;

exports.conversa = functions.https.onRequest((req, resp) =>{
    let payload = {
        workspace_id,
        context: req.body.context || {},
        input: req.body.context|| {}
    };

    chatbot.message(payload, (err, data) => {
        if(err){
            return resp.status(err.code || 500).json(err);
        }

        return resp.json(trataResposta(payload, data));
    });
});

const trataResposta = (payload, resposta) =>{
    console.log('watson disse:', resposta.output.text[0]);
    return resposta;
}

