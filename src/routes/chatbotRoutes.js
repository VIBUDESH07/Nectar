const express = require('express');
const ChatbotController = require('../controllers/chatbotController');

const router = express.Router();
const chatbotController = new ChatbotController();

    router.post('/message', chatbotController.handleIncomingMessage.bind(chatbotController));
 


module.exports = router;