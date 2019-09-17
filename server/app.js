const express = require('express');

const graphqlHTTP = require('express-graphql');

const mongoose = require('mongoose');
const cors = require('cors');

const schema = require('./schema/schema');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/graphql');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log('port is listening 4000'));
