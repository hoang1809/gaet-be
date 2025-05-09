module.exports = ({ env }) => ({
 
  translate: {
    enabled: true,
    config: {
      // Choose one of the available providers
      provider: "gct",
      // Pass credentials and other options to the provider
      providerOptions: {
        // Your API key - required and wil cause errors if not provided
        apiKey: env("GOOGLE_API_KEY"),
        // Your project id - required and wil cause errors if not provided
        projectId: env("GOOGLE_PROJECT_ID"),
        // Use custom locale mapping (for example to translate from your default locale to en-US)
        localeMap: {
          VI: 'VI-VN',
          EN: "EN-US",
        },
      },
    },
  },
});
