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

import accountType from './accountType';
import account from './accountSchema';

export default {
    addAccount:{
        type:accountType,
        args: {
            username:{
                name:'username',
                type:new GraphQLNonNull(GraphQLString)
            },
            email:{
                name:'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            accountType: {
                name:'accountType',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: account.addAccount
    },
    updateAccount:{
        type:accountType,
        args: {
            id:{
                type: GraphQLID
            },
            username:{
                name:'username',
                type:new GraphQLNonNull(GraphQLString)
            },
            email:{
                name:'email',
                type: new GraphQLNonNull(GraphQLString)
            },
            accountType: {
                name:'accountType',
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        resolve: account.updateAccount
    }
};
