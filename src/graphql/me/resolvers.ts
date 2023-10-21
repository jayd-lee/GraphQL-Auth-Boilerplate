import { GqlResolvers } from '../../generated/graphql';
import { GqlContext } from '../types';

const meResolvers: GqlResolvers<GqlContext> = {
  Query: {
    // TODO
    me: (_, __, ctx) => {
      return ctx.currentUser;
    }
  },
};

export default meResolvers;
