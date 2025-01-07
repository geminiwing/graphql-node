// Supported scalar types: Int, Float, String, Boolean, and ID.
// Exclamation (!) idicates that the field is required.
//
// For example, [String!]! indicates that the field is an array of strings that
// cannot be null or empty.

export const typeDefs = `#graphql
  type Game {
    id: ID!
    name: String!
    platform: [String!]!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Query {
    reviews: [Review]
    review(id: ID!): Review
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
`
