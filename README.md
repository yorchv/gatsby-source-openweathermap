# gatsby-source-openweathermap

This source plugin for Gatsby will make weather infomation from [OpenWeatherMap](https://openweathermap.org) available in GraphQL queries.

## Installation

```sh
# Install the plugin
yarn add gatsby-source-openweathermap
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
 {
      resolve: `gatsby-source-openweathermap`,
      options: {
        apikey: 'YOUR KEY',
        location: 'York',
        units: 'metric',
        type: 'forecast'
      },
    },
  ]
};
```

**NOTE:** To get a OpenWeatherMap API key, [register for a OpenWeatherMap account](https://home.openweathermap.org/users/sign_up).

See the [OpenWeatherMap API docs](https://openweathermap.org/api).
