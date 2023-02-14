export const typeDefs = /* GraphQL */`
  type User {
    userId: ID!
    name: String!
    reviews: [Review!]! @relationship(type: "WROTE", direction: OUT)
  }

  #extend type User @auth(rules: [{operations: [READ], allow: {userId: "$jwt.sub"}}, {roles: ["admin"]}])
  extend type User
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: ["admin"] }
      ]
    )
`;