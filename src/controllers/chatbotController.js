class ChatbotController {
    handle(req, res) {
       
        const user= req.body.Body; 
   

        let reply;

        if (user.toLowerCase().includes('hello')) {
            reply = 'Hello!';
        } else if (user.toLowerCase().includes('help')) {
            reply = 'Sure! What do you help with?';
        } 
        else if(user.toLowerCase().includes('bye')) {
            reply = 'Goodbye!';
        }
        else if (user.toLowerCase().includes('weather')) {
            reply = 'The weather is great!';
        } else if (user.toLowerCase().includes('news')) {
            reply = 'Here are the latest news headlines.';
        } else if (user.toLowerCase().includes('joke')) {
            reply = 'Why did the chicken cross the road? To get to the other side!';
        } else if (user.toLowerCase().includes('quote')) {
            reply = 'The only limit to our realization of tomorrow is our doubts of today.';
        }
        else if (user.toLowerCase().includes('time')) {
            const currentTime = new Date().toLocaleTimeString();
            reply = `The current time is ${currentTime}.`;
        } else if (user.toLowerCase().includes('date')) {
            const currentDate = new Date().toLocaleDateString();
            reply = `Today's date is ${currentDate}.`;
        } else if (user.toLowerCase().includes('location')) {
            reply = 'I am located in the cloud!';
        } else if (user.toLowerCase().includes('name')) {
            reply = 'I am your friendly chatbot!';
        }
        else if (user.toLowerCase().includes('feedback')) {
            reply = 'Thank you for your feedback!';
        } else if (user.toLowerCase().includes('support')) {
            reply = 'I am here to support you!';
        } else if (user.toLowerCase().includes('contact')) {
            reply = 'You can contact us at';
        }
    
        else {
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