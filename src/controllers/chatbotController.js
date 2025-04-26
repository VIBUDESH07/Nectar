class ChatbotController {
    handleIncomingMessage(req, res) {
        const userMessage = req.body.message;
        let replyMessage;

     
        if (userMessage.includes('hello')) {
            replyMessage = 'Hello! How can I assist you today?';
        } else if (userMessage.includes('help')) {
            replyMessage = 'Sure! What do you need help with?';
        } else {
            replyMessage = 'I am not sure how to respond to that.';
        }

        res.json({ reply: replyMessage });
    }
}

module.exports = ChatbotController;

