import {Config, CognitoIdentityCredentials} from 'aws-sdk';
import {CognitoUserPool, CognitoUser} from 'amazon-cognito-identity-js';
import {AuthenticationDetails} from 'amazon-cognito-identity-js';

import awsConfig from './aws-config';

Config.region = awsConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: awsConfig.IdentityPoolId
});

const userPool = new CognitoUserPool({
  UserPoolId: awsConfig.UserPoolId,
  ClientId: awsConfig.ClientId,
});

class AwsAuth {
  constructor() {
  }

  signIn = (email, password, callback) => {
    const authenticationData = {
      Username: email,
      Password: password
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        callback(null, result.getAccessToken().getJwtToken());
      },
      onFailure: (err) => {
        callback(err, null);
      }
    });
  }
}

export default AwsAuth;
