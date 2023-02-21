import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type Asset {
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
    assetType: AssetType!
    geoLocation: Point
    ambassadors: [Citizen!]! @relationship(type: "AMBASSADOR_OF", direction: IN)
    # model fields
    image: String
# TODO: found problematic fields
# owner: Entity! @relationship(type: "OWNS", direction: IN)
  }

  extend type Asset
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )

  enum AssetType {
    PHYSICAL_ASSET
    DIGITAL_ASSET
    DIGITAL_VOUCHER
    PHYSICAL_VOUCHER
  }
`;
