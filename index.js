import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// DB
import db from './_db.js';

// import type definitions
import { typeDefs } from './schema.js';

const resolvers = {
  // match the Query type in schema.js
  Query: {
    games() {
      return db.games
    },
    game(_, args) {  // first argument is the parent which is not used.
      return db.games.find(game => game.id === args.id)
    },
    authors() {
      return db.authors
    },
    author(_, args) {
      return db.authors.find(author => author.id === args.id)
    },
    reviews() {
      return db.reviews
    },
    review(_, args) {
      return db.reviews.find(review => review.id === args.id)
    }
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter(review => review.game_id === parent.id)
    }
  },
  Review: {
    author(parent) {
      return db.authors.find(author => author.id === parent.author_id)
    },
    game(parent) {
      return db.games.find(game => game.id === parent.game_id )
    },
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter(reviews => reviews.author_id === parent.id)
    }
  }
};

// Set up apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log('Server ready at port', 4000);
