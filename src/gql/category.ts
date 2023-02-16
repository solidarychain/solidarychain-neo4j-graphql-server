export const typeDefs = /* GraphQL */ `
  # custom resolvers
  # type Query {
  # }

  type Category {
    name: String!
    businesses: [Business!]! @relationship(type: "IN_CATEGORY", direction: IN)
  }
`;
