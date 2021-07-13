'use strict'

const room7 = {
  id: 7,
  area_id: 2,
  name: 'North Room',
  description: 'This is the north room of MUD#2!',
  exits: [
    { id: 13, direction: 'south', to_room_id: 6 }
  ]
}

Object.freeze(room7)
Object.freeze(room7.exits)
Object.freeze(room7.exits[0])

export default room7
