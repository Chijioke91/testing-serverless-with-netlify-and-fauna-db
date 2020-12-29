const formattedResponse = require('./utils/formattedResponse');
const { deleteLinkMutation } = require('./utils/mutation');

exports.handler = async (event) => {
  if (event.httpMethod !== 'DELETE') {
    return formattedResponse(405, { err: 'Method Not Supported' });
  }

  try {
    const { id } = JSON.parse(event.body);

    console.log(id);

    const variables = { id };

    const { deleteLink: deletedLink } = await deleteLinkMutation(variables);

    return formattedResponse(200, deletedLink);
  } catch (e) {
    console.log(e.message);

    return formattedResponse(500, { err: e.message });
  }
};
