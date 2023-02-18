import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Transaction {
    # base
    id: ID!
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
    # TODO: enum
    transactionType: String!
    # TODO: enum
    resourceType: String!
    quantity: Float
    # TODO: currency type
    currency: String
    input: Entity!
    output: Entity!
    # TODO: spatial
    geoLocation: Point
  }

  extend type Transaction
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
