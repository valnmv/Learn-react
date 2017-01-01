const config = {
  dbUri: process.env.MONGO_URI || 'mongodb://localhost:27017/learn-react',
  port: process.env.PORT || 3000,
  isDeveloping: process.env.NODE_ENV !== 'production'
};

module.exports = config;