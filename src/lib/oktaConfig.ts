export const oktaConfig = {
    clientId: '0oad8avr1hJvmx7am5d7',
    issuer: 'https://dev-35433368.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}