const express = require("express");
const mongoose = require("mongoose");
const {buildSchema} = require("graphql");
const {graphqlHTTP} = require("express-graphql");
 const UserModel = require("./model/User");                                     

const app = express();       
const SERVER_CODE = 4000;

                                                       


// GraphQL Schema
const gqlSchema = buildSchema(
    `type Query {
    welcome: String
    greet(name: String): String
    user : User
    users : [User]

    }

    type Mutation {
        addUser(uid:Int, fnm: String, lnm: String, salary:Float): User
    }

    type User { 
        uid: Int
        firstname: String
        lastname: String
        salary: Float
    }

    `

)

// Root resolver
const rootResolver ={
    welcome: () => {
        return "Welcome to GraphQL examples";
    },
    greet: ({name}) => {
        return `Hello ${name}`;
    },

    
    user: async() => {
        // const user = {
        //     uid: 1,
        //     fnm: "Fatima",
        //     lnm: "Arab",
        //     salary: 50000
        // }
        const user = await UserModel.findOne({})
        console.log(user)
        return user
    },

    users: async () => {  
        // const users =[{
        //     uid: 1,
        //     fnm: "Fatima",
        //     lnm: "Arab",
        //     salary: 500.50
        // },
        // {
        //     uid: 2,
        //     fnm: "Ali",
        //     lnm: "Khan",
        //     salary: 600.90
        // },
        // {
        //     uid: 3,
        //     fnm: "Sara",
        //     lnm: "smith",
        //     salary: 70000
        // }]
        const users = await UserModel.find({})
        console.log(users)
        return users
   },

   addUser: async (user)=> {
       console.log(user)
       // Insert to database
       const {uid, fnm, lnm, salary} = user
       const newUser = UserModel({
              uid,
              firstname:fnm,
              lastname:lnm,
              salary
       })
        await newUser.save()
       return newUser
    }  
}

// GqlHttp object
const  grpahqlHttp = graphqlHTTP({
    schema: gqlSchema,
    rootValue: rootResolver,
    graphiql: true
})

app.use("/graphql", grpahqlHttp);


// Helper function to connect to MongoDB asynchrously
const connectDB = async () => {
    try {
        console.log(`Attempting to connect to MongoDB`);
        // To do -replace the connection string with the actual connection string
        const DB_NAME = "employee_db"
        const DB_USER_NAME  = "fatimaarab"
        const DB_PASSWORD ="miladarab"
        const CLUSTER_ID = "cluster0.8lvqu"
        const DB_CONNECTION =  `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
         
        mongoose.connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("MongoDB connected");
        }).catch((err) => {
            console.log(`Error connecting to MongoDB":${JSON.stringify(err)}`)
        });
    }catch(error) {
        console.log(`Error connecting to MongoDB: ${error.message}`);
    }
}


app. listen(SERVER_CODE, () => {
    console.log(`Server is running on port ${SERVER_CODE}`);
    connectDB();
    console.log(`http://localhost:4000/graphql`);
    });