const express = require('express');
const bodyParser = require('body-parser');
const chatbotRoutes = require('./routes/chatbotRoutes');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use('/api', chatbotRoutes());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});