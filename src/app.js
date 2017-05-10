/**
 * Created by danstan on 5/9/17.
 */
// Import GraphQL and destructure for easy access
import { transform } from 'babel-core';
import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql'

// Import express server
import express from 'express'

// Import mongoose to connect to MongoDB
import mongoose from 'mongoose'

// Import express-graphql an easy express integration of https://github.com/graphql/graphiql
import graphqlHTTP from 'express-graphql'

// Import GraphQL Queries
import userQueries from './models/user/userQueries'
import accountQueries from './models/account/accountQueries'

// Import GraphQL Mutations
import userMutations from './models/user/userMutations'
import accountMutations from './models/account/accountMutations'

// Setup GraphQL UsersQuery
let UserQuery = new GraphQLObjectType({
        name: 'Query',
        description: 'Realize Root Query',
        fields: () => ({
        user: userQueries.user,
        users: userQueries.users,
        userId: userQueries.userId,
        userByName: userQueries.userByName
    })
})

//Setup GraphQL Accounts Query

let AccountQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Realize Root Query',
    fields: () => ({
        accounts: accountQueries.accounts,
        accountByEmail: accountQueries.accountByEmail
    })
})

// Setup GraphQL UserMutation
let UserMutation = new GraphQLObjectType({
        name: 'Mutation',
        description: 'Realize Root Mutations',
        fields: () => ({
        addUser: userMutations.addUser,
        updateUser: userMutations.updateUser
    })
})

//Setup GraphQl Account Mutation
let AccountMutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Realize Root Mutations',
    fields: () => ({
        addAccount: accountMutations.addAccount,
        updateAccount: accountMutations.updateAccount
    })
})

// Set up GraphQL UsersSchema with our UserQuery and UserMutation

let userSchema = new GraphQLSchema({
    query: UserQuery,
    mutation: UserMutation
})

// Set up GraphQL UsersSchema with our AccountQuery and AccountMutation

let accountSchema = new GraphQLSchema({
    query: AccountQuery,
    mutation: AccountMutation
})

// Connect MongoDB with Mongoose
mongoose.connect('mongodb://localhost/graphql-Node-express-mongodb')

// Set up Express and integrate with our GraphQL Schema and configure to use graphiql
var app = express()
app.use('/accounts', graphqlHTTP({ schema: accountSchema, graphiql: true }))
app.use('/users', graphqlHTTP({ schema: userSchema, graphiql: true }))
app.listen('5000')

var status = {
    Express: {
        "Online": true,
        "Port": 5000
    },
    "Users": {
        "url": "http://localhost:5000/users"
    },
    "Accounts": {
        "url": "http://localhost:5000/accounts"
    }
}
console.dir(status, {depth: null, colors: true })

