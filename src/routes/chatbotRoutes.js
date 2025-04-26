const express = require('express');
const ChatbotController = require('../controllers/chatbotController');

const router = express.Router();
const chatbotController = new ChatbotController();

function setRoutes(app) {
    router.post('/message', chatbotController.handleMessage.bind(chatbotController));
    app.use('/chatbot', router);
}

module.exports = setRoutes;