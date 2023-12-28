require('dotenv').config();
const express = require('express');
const app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.set('trust proxy', true);

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api/whoami', (req, res) => {
  const ipaddress = req.ip;
  const language = req.acceptsLanguages();
  const software = req.get('User-Agent');

  res.json({ ipaddress, language, software });
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});