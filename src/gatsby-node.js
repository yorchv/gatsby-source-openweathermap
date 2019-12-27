import "@babel/polyfill";

const fetch = require('node-fetch');
const crypto = require('crypto');

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId },
  { plugins, ...options }
) => {

  const apiUrl = `https://api.openweathermap.org/data/2.5/${options.type}?q=${options.location}&units=${options.units}&appid=${options.apikey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  createNode({
    ...data,
    id: createNodeId(`weather-${data.id}`),
    parent: null,
    children: [],
    internal: {
      type: 'OpenWeather',
      content: JSON.stringify(data),
      contentDigest: crypto
        .createHash('md5')
        .update(JSON.stringify(data))
        .digest('hex'),
    },
  });
};
