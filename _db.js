// This file is used to simulate a database for the purpose of this project.
let games = [
  {id: '1', title: 'XCOM: UFO Defense', platform: ['DOS', 'PS', 'Amiga']},
  {id: '2', title: 'XCOM: Terror from the Deep', platform: ['DOS', 'PS']},
  {id: '3', title: 'XCOM: Apocalypse', platform: ['DOS']},
  {id: '4', title: 'XCOM: Enemy Unknown', platform: ['Windows', 'Xbox 360', 'PS3']},
  {id: '5', title: 'XCOM2', platform: ['Windows', 'Xbox One', 'PS4']},
]

let authors = [
  {id: '1', name: 'Mario', verified: true},
  {id: '2', name: 'Yoshi', verified: false},
  {id: '3', name: 'Peach', verified: true},
]

let reviews = [
  {id: '1', rating: 9, content: 'Lorem ipsum', author_id: '1', game_id: '2'},
  {id: '2', rating: 10, content: 'Lorem ipsum', author_id: '2', game_id: '1'},
  {id: '3', rating: 7, content: 'Lorem ipsum', author_id: '3', game_id: '3'},
  {id: '4', rating: 5, content: 'Lorem ipsum', author_id: '2', game_id: '4'},
  {id: '5', rating: 8, content: 'Lorem ipsum', author_id: '2', game_id: '5'},
  {id: '6', rating: 7, content: 'Lorem ipsum', author_id: '1', game_id: '2'},
  {id: '7', rating: 10, content: 'Lorem ipsum', author_id: '3', game_id: '1'},
]

export default { games, authors, reviews }
