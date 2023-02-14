export const typeDefs = /* GraphQL */`
  type Review {
    reviewId: ID! @id
    stars: Float!
    date: Date!
    text: String
    user: User! @relationship(type: "WROTE", direction: IN)
    business: Business! @relationship(type: "REVIEWS", direction: OUT)
  }

  extend type Review
    @auth(
      rules: [
        {
          operations: [CREATE, UPDATE]
          bind: { user: { userId: "$jwt.sub" } }
        }
      ]
    )
`;