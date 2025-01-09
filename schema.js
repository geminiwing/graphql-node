// Supported scalar types: Int, Float, String, Boolean, and ID.
// Exclamation (!) idicates that the field is non-nullable.
//
// [String!]! means that each element of the array cannot be null,
// and the array itself cannot be null.
// [Review!] means the each element of the array cannot be null,
// but the array itself can be null.
//
// Note: Whether there's an outer exclamation mark or not, an empty array [] is always valid.

export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
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
