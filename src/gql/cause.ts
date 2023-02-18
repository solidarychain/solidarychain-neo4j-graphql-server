import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Cause implements Entity {
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
    image: String
    startDate: Date!
    endDate: Date!
    # relationship out
# TODO:
# entity: Entity @relationship(type: "BELONGS_TO", direction: IN)
  }

  extend type Cause
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )
`;
