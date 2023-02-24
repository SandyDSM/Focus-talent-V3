const awsConfig = {
  Auth: {
    identityPoolId: 'us-east-1_f8AdJ10FA',
    region: 'us-east-1',
    userPoolId: 'us-east-1_f8AdJ10FA',
    userPoolWebClientId: '3hag9dakqsp428ark6lilvedtm',
  },
  oauth: {
    //domain: 'focustalent1.auth.us-east-1.amazoncognito.com',
    //scope: ['email', 'openid'],
    //redirectSignIn: 'http://localhost:3000/',
    //redirectSignOut: 'http://localhost:3000/',
    responseType: 'code',
  },
  "federationTarget": "COGNITO_USER_POOLS",
};

export default awsConfig;