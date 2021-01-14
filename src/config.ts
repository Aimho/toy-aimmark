const Config = () => {
  const env = process.env.NODE_ENV;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const version = process.env.npm_package_version;

  const firebase = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DB_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL;

  return {
    env,
    baseUrl,
    version,

    // firebase
    firebase,

    // Hasura
    graphqlUrl,
  };
};

export default Config();
