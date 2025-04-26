class ChatbotController {
    handleIncomingMessage(req, res) {
       
        const userMessage = req.body.Body; 
   

        let replyMessage;

        if (userMessage.toLowerCase().includes('hello')) {
            replyMessage = 'Hello! How can I assist you today?';
        } else if (userMessage.toLowerCase().includes('help')) {
            replyMessage = 'Sure! What do you need help with?';
        } else {
            replyMessage = 'I am not sure how to respond to that.';
        }

        res.set('Content-Type', 'text/xml'); 
        res.send(`
            <Response>
                <Message>${replyMessage}</Message>
            </Response>
        `);
    }
}

module.exports = ChatbotController;