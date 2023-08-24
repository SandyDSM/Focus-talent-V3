import React from "react";
//import AWS from 'aws-sdk';

import { Amplify, Auth } from "aws-amplify";

import AWS from 'aws-sdk';

AWS.config.update({
  region: 'us-east-1'
});

 export const invokeLambdaFunction = (functionName, payload) => {
  Auth.currentCredentials()
  .then(credentials => {  
  const lambda = new AWS.Lambda({credentials: Auth.essentialCredentials(credentials)});
 
    const params = {
    FunctionName: functionName,
    Payload: JSON.stringify(payload)
    };
    return lambda.invoke(params).promise();
    })};

 

 //export default SendEmail;

/*Auth.currentCredentials()
  .then(credentials => {
    const lambda = new Lambda({
      credentials: Auth.essentialCredentials(credentials)
    });
    return lambda.invoke({
      FunctionName: 'my-function',
      Payload: JSON.stringify({ hello: world }),
    });
  })*/