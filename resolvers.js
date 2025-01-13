// DB
import db from './_db.js';

export const resolvers = {
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
  },
  Mutation: {
    addGame(_, args) {
      const newId = db.games.reduce((maxId, game) => Math.max(maxId, game.id), 0) + 1
      const newGame = { id: String(newId), ...args.game }
      db.games.push(newGame)

      return newGame
    },
    updateGame(_, args) {
      db.games = db.games.map(game =>
        game.id === args.id ? { ...game, ...args.edits } : game
      )

      return db.games.find(game => game.id === args.id)
    },
    deleteGame(_, args) {
      db.games = db.games.filter(game => game.id !== args.id)

      return db.games
    }
  }
};
