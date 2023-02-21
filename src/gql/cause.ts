import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Cause implements Entity {
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
    image: String
    startDate: Date!
    endDate: Date!
  }

  extend type Cause
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
