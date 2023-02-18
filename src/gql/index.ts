import * as Query from './query';
import * as Common from './common';
import * as Organization from './organization';
import * as Citizen from './citizen';
import * as Cause from './cause';
import * as Asset from './asset';
import * as Good from './good';
import * as Transaction from './transaction';

export const typeDefs = [
  Query.typeDefs,
  Common.typeDefs,
  Organization.typeDefs,
  Citizen.typeDefs,
  Cause.typeDefs,
  Asset.typeDefs,
  Good.typeDefs,
  Transaction.typeDefs,
];
