const formattedResponse = require('./utils/formattedResponse');
const { createLinkMutation } = require('./utils/mutation');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return formattedResponse(405, { err: 'Method Not Supported' });
  }

  try {
    const { name, description, url } = JSON.parse(event.body);

    const variables = { name, description, url, archived: false };

    const { createLink: createdLink } = await createLinkMutation(variables);

    return formattedResponse(200, createdLink);
  } catch (e) {
    console.log(e.message);

    return formattedResponse(500, { err: e.message });
  }
};
