import { GraphQLClient } from 'graphql-request'

//const client = new GraphQLClient(process.env.GRAPHQL_HOST)
const client = new GraphQLClient('http://localhost:3003/api/todos')
export default client
