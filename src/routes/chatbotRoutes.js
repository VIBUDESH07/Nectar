const express = require('express');
const Controller = require('../controllers/chatbotController');

const router = express.Router();
const chatController = new Controller();

router.post('/message', chatController.handle.bind(chatbotController));
 


module.exports = router;