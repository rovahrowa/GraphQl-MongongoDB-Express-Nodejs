/**
 * Created by danstan on 5/9/17.
 */
import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import accountType from './accountType'
import account from './accountSchema'

export default {
    accounts: {
        type: new GraphQLList(accountType),
        resolve: account.getListOfAccounts
    },
    accountByEmail: {
        type: accountType,
        args: {
            id: {
                type: GraphQLString
            }
        },
        resolve: account.getAccountByEmail
    },
    accountById: {
        type: accountType,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: account.getAccountById
    },
    accountByUsername: {
        type: accountType,
        args: {
            name: {
                type: GraphQLString
            }
        },
        resolve: account.getAccountByUsername
    }
};
