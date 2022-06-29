const express = require('express');
const routes = require('./Routes/routes')
const app = express();
const cors = require('cors');

app.use(cors({ origin: 'http://localhost:3000'}));

app.use(express.json);
app.use(routes);


app.listen(3333);