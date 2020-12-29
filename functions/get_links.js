const formattedResponse = require('./utils/formattedResponse');
const { getLinksQuery } = require('./utils/query');

exports.handler = async (event) => {
  if (event.httpMethod !== 'GET') {
    return formattedResponse(405, { err: 'Method Not Supported' });
  }
  try {
    const data = await getLinksQuery();

    return formattedResponse(200, data);
  } catch (e) {
    console.log(e.message);

    return formattedResponse(500, { err: e.message });
  }
};
