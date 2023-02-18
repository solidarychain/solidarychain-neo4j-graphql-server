// root query entry, custom resolvers

export const typeDefs = /* GraphQL */ `
  scalar JSONObject

  # interface Base {
  #   id: ID!
  #   createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
  #   createdAt: DateTime! @timestamp(operations: [CREATE])
  #   updatedAt: DateTime! @timestamp(operations: [UPDATE])
  #   metaData: JSONObject
  #   metaDataInternal: JSONObject
  # }

  interface Entity {
    name: String!
    email: String
    geoLocation: Point
    fundsBalance: GenericBalance!
    volunteeringHoursBalance: GenericBalance!
    goodsStock: [Good!]! @relationship(type: "HAVE", direction: IN)
  }

  type GenericBalance {
    debit: Float!
    credit: Float!
    balance: Float!
  }
`;
