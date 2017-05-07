const config = {
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017/learn-react',
    port: process.env.PORT || 3000
  },

  aws: {
    region: 'us-east-1',
    IdentityPoolId: 'us-east-1:088c92af-b58e-4827-8940-d6c08d587b4d',
    UserPoolId: 'us-east-1_ybNA9Hkko',
    ClientId: '3qe726nleicdf9dikogt03804j'
  }
};

module.exports = config;
