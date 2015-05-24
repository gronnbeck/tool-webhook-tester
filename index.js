var app = require('express')();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.use(function(req, res) {
  var data = {
    success: true,
    data: req.body,
    path: req.path,
    headers: req.headers
  }
  console.log(JSON.stringify(data, null, 2));
  res.send(data);
});

app.listen(PORT, function() {
  console.log('Running on port: ' + PORT)
});
