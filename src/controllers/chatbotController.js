class ChatbotController {
    handle(req, res) {
       
        const user= req.body.Body; 
   

        let reply;

        if (user.toLowerCase().includes('hello')) {
            reply = 'Hello!';
        } else if (user.toLowerCase().includes('help')) {
            reply = 'Sure! What do you help with?';
        } else {
            reply = 'I am not sure how to respond.';
        }

        res.set('Content-Type', 'text/xml'); 
        res.send(`
            <Response>
                <Message>${reply}</Message>
            </Response>
        `);
    }
}

module.exports = ChatbotController;