import { Amplify, API } from 'aws-amplify';

Amplify.configure({
    // OPTIONAL - if your API requires authentication 
    Auth: {
        identityPoolId: 'us-east-1:e0dc029c-fc99-4079-900e-c1a5f0a9bfa3', // REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-1_fv09rJ7aK', // OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '39s7dfmvtso0306r9appsnqapc', // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    },
    API: {
        endpoints: [
            {
                name: "API Behaviors",
                endpoint: "https://vlzue8oog7.execute-api.us-east-1.amazonaws.com/TEST"
            },
            {
                name: "API PerfPoten",
                endpoint: "https://xoiabhzb2j.execute-api.us-east-1.amazonaws.com/prod"  
            },
            {
                name: "API Anios",
                endpoint: "https://42d2x1t7cj.execute-api.us-east-1.amazonaws.com/prod"  
            }
        ]
    }
});

