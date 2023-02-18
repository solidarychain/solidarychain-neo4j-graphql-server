import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Citizen implements Entity {
    # base
    id: ID!
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
    # implement entity
    name: String!
    email: String
    geoLocation: Point
    fundsBalance: GenericBalance!
    volunteeringHoursBalance: GenericBalance!
    goodsStock: [Good!]!
    # model fields
    # TODO: add citizen minimal fields order by the same order of identity provider
    # auth
    roles: [String!]
    # relationship out
# TODO:
# entity: Entity @relationship(type: "BELONGS_TO", direction: IN)
    # relationship out
    organizations: [Organization!]! @relationship(type: "CREATE", direction: OUT)
    citizens: [Citizen!]! @relationship(type: "CREATE", direction: OUT)
    causes: [Cause!]! @relationship(type: "CREATE", direction: OUT)
    asset: [Asset!]! @relationship(type: "CREATE", direction: OUT)
    goods: [Good!]! @relationship(type: "CREATE", direction: OUT)
  }

  extend type Citizen
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
