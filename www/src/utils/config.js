const Config = {
  publicUrl: process.env.PUBLIC_URL,
  api: {
    host: (process.env.NODE_ENV == 'development') ? 'http://localhost:3001' : false,
    endpoint: '/api'
  },
  auth0: {
    domain: 'marketplace-pachama.auth0.com',
    clientId: 'sfj8nlpFONfJanArPrB8PpcB0E9FU4UI'
  }
};

export default Config;
