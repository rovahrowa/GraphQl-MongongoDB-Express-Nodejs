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
} from 'graphql'

// Define our accountType type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
    name: 'Account',
    description: 'Account object',
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        id: {
            type: GraphQLString
        },
        username: {
            type: new GraphQLNonNull(GraphQLString)
        },
        email:{
            type: GraphQLString
        },
        accountType: {
            type: GraphQLString
        },
        dateCreated: {
            type: GraphQLString
        }
    })
});
