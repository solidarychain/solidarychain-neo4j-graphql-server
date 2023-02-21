// root query entry, custom resolvers

export const typeDefs = /* GraphQL */ `
  scalar JSONObject

  type GenericBalance {
    debit: Float!
    credit: Float!
    balance: Float!
  }
  
  interface Base {
    id: ID! @id
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
  }

  interface Entity {
    name: String!
    email: String
    geoLocation: Point
    # TODO: can't use it in interface else it crash
    # interface field EntityEventPayload.fundsBalance expected but CauseEventPayload does not provide it
    # fundsBalance: GenericBalance!
    # volunteerTimeHoursBalance: GenericBalance!
    assets: [Asset!]! @relationship(type: "OWNS", direction: OUT)
    goods: [Good!]! @relationship(type: "HAS", direction: OUT)
    transactions: [Transaction!]! @relationship(type: "TRANSACTED", direction: OUT)
    ambassadors: [Citizen!]! @relationship(type: "REPRESENTS", direction: OUT)
    # TODO: add transactions
  }
`;
