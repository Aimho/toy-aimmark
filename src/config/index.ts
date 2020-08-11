const AppConfig = () => {
  const env = process.env.NODE_ENV;
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const exampleUrl = process.env.REACT_APP_EXAMPLE_URL;
  return {
    env,
    baseUrl,
    exampleUrl,
  };
};

export default AppConfig();
