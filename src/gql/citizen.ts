import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Citizen implements Entity {
    # base
    id: ID! @id
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
    volunteerTimeHoursBalance: GenericBalance!
    assets: [Asset!]!
    goods: [Good!]!
    ambassadors: [Citizen!]!
    transactions: [Transaction!]!
    # model fields
    # auth
    roles: [String!]
    # relationship out: person create...
    # organization: [Organization!]! @relationship(type: "CREATE", direction: OUT)
    # citizen: [Citizen!]! @relationship(type: "CREATE", direction: OUT)
    # cause: [Cause!]! @relationship(type: "CREATE", direction: OUT)
    # asset: [Asset!]! @relationship(type: "CREATE", direction: OUT)
    # transactions: [Transaction!]! @relationship(type: "CREATE", direction: OUT)
    # relationship out: person ambassador of
    # organizations: [Organization!]! @relationship(type: "AMBASSADOR_OF", direction: OUT)
    # causes: [Cause!]! @relationship(type: "AMBASSADOR_OF", direction: OUT)
    # assets: [Asset!]! @relationship(type: "AMBASSADOR_OF", direction: OUT)
  }

  extend type Citizen
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
