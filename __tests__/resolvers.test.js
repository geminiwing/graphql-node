import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../schema.js';
import { resolvers } from '../resolvers.js';
import db from '../_db.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

describe('addGame Mutation', () => {
  it('adds a new game', async () => {
    const operation = `
      mutation AddGame($game: AddGameInput!) {
        addGame(game: $game) {
          id,
          title,
          platform
        }
      }
    `;
    const variables = {
      game: {
        title: 'XCOM3',
        platform: ['PS6'],
      }
    };

    const gameCount = db.games.length;
    const response = await server.executeOperation({
      query: operation,
      variables: variables,
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(db.games.length).toEqual(gameCount + 1);
    const addedGame = db.games.at(-1);
    expect(typeof addedGame.id).toBe('string');
    expect(addedGame.title).toEqual(variables.game.title);
    expect(addedGame.platform).toEqual(variables.game.platform);
  });
});

describe('updateGame Mutation', () => {
  it('updates a game', async () => {
    const operation = `
      mutation UpdateGame($id: ID!, $edits: EditGameInput!) {
        updateGame(id: $id, edits: $edits) {
          id,
          title,
          platform
        }
      }
    `;
    const variables = {
      id: db.games.at(-1).id,
      edits: {
        platform: ['PS7']
      }
    };

    const response = await server.executeOperation({
      query: operation,
      variables: variables,
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(db.games.at(-1).platform).toEqual(variables.edits.platform);
  });
});

describe('deleteGame Mutation', () => {
  it('deletes a game', async () => {
    const operation = `
      mutation DeleteGame($id: ID!) {
        deleteGame(id: $id) {
          id,
          title,
          platform
        }
      }
    `;
    const gameId = db.games.at(-1).id;
    const variables = {
      id: gameId,
    };

    const gameCount = db.games.length;
    const response = await server.executeOperation({
      query: operation,
      variables: variables,
    });

    expect(response.body.singleResult.errors).toBeUndefined();
    expect(db.games.length).toEqual(gameCount - 1);
    expect(db.games.map(game => game.id)).not.toContain(gameId);;
  });
});
