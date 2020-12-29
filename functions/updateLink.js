const formattedResponse = require('./utils/formattedResponse');
const { updateLinkMutation } = require('./utils/mutation');

exports.handler = async (event) => {
  if (event.httpMethod !== 'PUT') {
    return formattedResponse(405, { err: 'Method Not Supported' });
  }

  try {
    const { id, name, description, url, archived } = JSON.parse(event.body);

    const variables = { id, name, description, url, archived };

    const { updateLink: updatedLink } = await updateLinkMutation(variables);

    return formattedResponse(200, updatedLink);
  } catch (e) {
    console.log(e.message);

    return formattedResponse(500, { err: e.message });
  }
};
