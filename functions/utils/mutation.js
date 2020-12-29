const graphQLClient = require('./request');
const { gql } = require('graphql-request');

exports.createLinkMutation = async (variables) => {
  try {
    const mutation = gql`
      mutation CreateLink(
        $name: String!
        $description: String!
        $url: String!
        $archived: Boolean
      ) {
        createLink(
          data: {
            name: $name
            description: $description
            url: $url
            archived: $archived
          }
        ) {
          _id
          name
          description
          archived
          url
        }
      }
    `;

    return graphQLClient.request(mutation, variables);
  } catch (e) {
    throw new Error(e);
  }
};

exports.updateLinkMutation = async (variables) => {
  try {
    const mutation = gql`
      mutation UpdateLink(
        $id: ID!
        $name: String!
        $description: String!
        $url: String!
        $archived: Boolean
      ) {
        updateLink(
          id: $id
          data: {
            name: $name
            description: $description
            url: $url
            archived: $archived
          }
        ) {
          _id
          name
          description
          archived
          url
        }
      }
    `;

    return graphQLClient.request(mutation, variables);
  } catch (e) {
    throw new Error(e);
  }
};

exports.deleteLinkMutation = async (variables) => {
  try {
    const mutation = gql`
      mutation DeleteLink($id: ID!) {
        deleteLink(id: $id) {
          _id
          name
          description
          url
          archived
        }
      }
    `;

    return graphQLClient.request(mutation, variables);
  } catch (e) {
    throw new Error(e);
  }
};
