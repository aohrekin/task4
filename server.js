const express = require("express");
const app = express();
app.use(express.static(__dirname + "/angular-project"));
app.get('/*', function(req, res) {
  res.sendFile('/src/index.html' , { root : __dirname});
});
// root: path.join(__dirname, '../public')
// app.get('/', function(req, res) {
//   res.send('hello world');
// });
app.listen(process.env.PORT || 8080);
