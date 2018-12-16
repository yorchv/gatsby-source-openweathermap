# gatsby-source-pixabay

This source plugin for Gatsby will make weather infomation from [OpenWeatherMap](https://openweathermap.org) available in GraphQL queries.

## Installation

```sh
# Install the plugin
yarn add gatsby-source-openweatherapi
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
 {
      resolve: `gatsby-source-openweatherapi`,
      options: {
        apikey: 'YOUR KEY',
        location: 'york',
        units: 'metric',
        type: 'forecast'
      },
    },
  ]
};
```

**NOTE:** To get a Pixabay API key, [register for a Pixabay account](https://home.openweathermap.org/users/sign_up).

See the [OpenWeatherMap API docs](https://openweathermap.org/api).
