import { appConstants } from "../app";

export const typeDefs = /* GraphQL */ `
  type AssetItems @exclude {
    asset: Asset!
    quantity: Int!
  }

  type GoodItems @exclude {
    good: Good!
    quantity: Int!
  }

  type Transaction {
    # base
    id: ID! @id
    createdBy: Citizen! @relationship(type: "CREATE", direction: IN)
    createdAt: DateTime! @timestamp(operations: [CREATE])
    updatedAt: DateTime! @timestamp(operations: [UPDATE])
    metaData: JSONObject
    metaDataInternal: JSONObject
    # model fields
    transactionType: TransactionType!
    resourceType: ResourceType!
    currency: CurrencyType!
    quantity: Float!
    input: Entity!
    output: Entity!
    geoLocation: Point
    assets: [AssetItems!]
    goods: [GoodItems!]
  }

  extend type Transaction
    @auth(
      rules: [
        { operations: [READ], where: { userId: "$jwt.sub" } }
        { operations: [CREATE, UPDATE, DELETE], roles: [${appConstants.authentication.defaultAdminRole}] }
      ]
    )

    enum TransactionType {
    TRANSFER_FUNDS
    TRANSFER_VOLUNTEERING_HOURS
    TRANSFER_GOODS
    TRANSFER_ASSET
    TRANSFER_VOUCHER
  }

  enum ResourceType {
    FUNDS
    VOLUNTEERING_HOURS
    GENERIC_GOODS
    ASSET
  }

  enum CurrencyType {
    EUR
    USD
  }
`;
