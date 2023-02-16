import * as Query from './business';
import * as Business from './query';
import * as Category from './category';
import * as Review from './review';
import * as User from './user';

export const typeDefs = [
  Query.typeDefs,
  Business.typeDefs,
  Category.typeDefs,
  Review.typeDefs,
  User.typeDefs
];
