import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './graphql';
import { GqlContext } from './graphql/types';
import Auth from './modules/auth';
import { GraphQLError } from 'graphql';

const server = new ApolloServer<GqlContext>({ typeDefs, resolvers });

const port = Number(process.env.PORT ?? 8080);
const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { host: '0.0.0.0', port },
    context: async ({ req }) => {
      const authToken = req.headers.authorization?.split(' ')[1];
      if (!authToken) return {currentUser: null};
      try {
        const currentUser = await Auth.verifyAuthToken(authToken);
        return { currentUser: currentUser };

      } catch(e) {  
        throw new GraphQLError('Invalid auth Token', {
          extensions: {code: 'NOT_AUTHENTICATED'}});
      }
    },
  });
  console.log(`Server running at ${url}`);
};
startServer();
