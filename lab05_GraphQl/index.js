const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers'); 


//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const mongodb_atlas_url = process.env.MONGODB_URL||'mongodb://localhost:27017/movies_db';

//TODO - Replace you Connection String here
const connectDB = async () => {
  try {
      await mongoose.connect(mongodb_atlas_url, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });
      console.log(' Success: Connected to MongoDB');
  } catch (error) {
      console.log(` Error: Unable to connect to DB: ${error.message}`);
  }
};

//Define Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//Define Express Server
const app = express();
app.use(express.json());
app.use('*', cors());

//Add Express app as middleware to Apollo Server
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

//Start listen 
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    connectDB();
  });
}
startServer();
