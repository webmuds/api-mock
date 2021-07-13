'use strict'

const room8 = {
  id: 8,
  area_id: 2,
  name: 'South Room',
  description: 'This is the south room of MUD#2!',
  exits: [
    { id: 14, direction: 'north', to_room_id: 6 }
  ]
}

Object.freeze(room8)
Object.freeze(room8.exits)
Object.freeze(room8.exits[0])

export default room8
