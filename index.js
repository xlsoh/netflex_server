const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('🌈️ GET request to the Netflex ! ');
});

app.listen(PORT, () => {
  console.log(`📢️ Server Listening On ${PORT}`);
});
