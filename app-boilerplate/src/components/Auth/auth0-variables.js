export const AUTH_CONFIG = {
  domain: 'annotaurus-lex.auth0.com',
  clientId: 'bQSzTBGSSw2lgLsycCe7oI5beimOmkOb',
  callbackUrl: 'http://localhost:3000/callback',
  leeway: 300,
  oidcClient: {
    // (Optional) Configure the timeout in milliseconds for HTTP requests to Auth0.
    httpTimeout: 2500,
    // (Optional) Configure the clock tolerance in milliseconds, if the time on your server is running behind.
    clockTolerance: 1000000
  }
};
