const app = require('express')();
const cors = require('cors');
const proxy = require('express-http-proxy');

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use('/', proxy('http://onepercent.localhost:8000/api'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
