'use strict'

const room10 = {
  id: 10,
  area_id: 2,
  name: 'West Room',
  description: 'This is the west room of MUD#2!',
  exits: [
    { id: 16, direction: 'east', to_room_id: 6 }
  ]
}

Object.freeze(room10)
Object.freeze(room10.exits)
Object.freeze(room10.exits[0])

export default room10
