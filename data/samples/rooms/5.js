'use strict'

const room5 = {
  id: 5,
  area_id: 1,
  name: 'West Room',
  description: 'This is the west room of MUD#1!',
  exits: [
    { id: 8, direction: 'east', to_room_id: 1 }
  ]
}

Object.freeze(room5)
Object.freeze(room5.exits)
Object.freeze(room5.exits[0])

export default room5
