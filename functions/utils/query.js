const graphQLClient = require('./request');
const { gql } = require('graphql-request');

exports.getLinksQuery = async () => {
  try {
    const query = gql`
      {
        allLinks {
          data {
            _id
            url
            name
            archived
            description
          }
        }
      }
    `;

    return graphQLClient.request(query);
  } catch (e) {
    throw new Error(e);
  }
};
