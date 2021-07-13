'use strict'

const room2 = {
  id: 2,
  area_id: 1,
  name: 'North Room',
  description: 'This is the north room of MUD#1!',
  exits: [
    { id: 5, direction: 'south', to_room_id: 1 }
  ]
}

Object.freeze(room2)
Object.freeze(room2.exits)
Object.freeze(room2.exits[0])

export default room2
