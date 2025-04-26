const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

app.use('/api', chatbotRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});