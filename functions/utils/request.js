const { GraphQLClient } = require('graphql-request');
require('dotenv').config();

const endpoint = 'https://graphql.fauna.com/graphql';

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
  },
});

module.exports = graphQLClient;
