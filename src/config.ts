const Config = () => {
  const firebase = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  };

  const hasura = {
    url: process.env.REACT_APP_GRAPHQL_URL,
    secret: process.env.REACT_APP_GRAPHQL_SECRET,
  };

  return {
    // firebase
    firebase,

    // Hasura
    hasura,
  };
};

export default Config();
