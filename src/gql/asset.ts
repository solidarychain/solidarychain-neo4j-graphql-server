import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Asset {
    # base
    id: ID!
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
    # model fields
    name: String!
    description: String
    assetType: String!
    geoLocation: Point
    ambassadors: [Citizen!]
    # model fields
    image: String
    # relationship out
# TODO:
# entity: Entity @relationship(type: "BELONGS_TO", direction: IN)
  }

  extend type Asset
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
