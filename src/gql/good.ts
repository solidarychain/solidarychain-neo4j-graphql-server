import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Good {
    # base
    id: ID! @id
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
    # model fields
    name: String!
    description: String
    code: String!
    barCode: String
    balance: GenericBalance!
    owner: Entity! @relationship(type: "BELONGS_TO", direction: IN)
  }

  extend type Good
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
