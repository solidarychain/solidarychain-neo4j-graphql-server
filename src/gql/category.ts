export const typeDefs = /* GraphQL */`
  type Category {
    name: String!
    businesses: [Business!]!
      @relationship(type: "IN_CATEGORY", direction: IN)
  }
`;