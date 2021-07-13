'use strict'

const room3 = {
  id: 3,
  area_id: 1,
  name: 'South Room',
  description: 'This is the south room of MUD#1!',
  exits: [
    { id: 6, direction: 'north', to_room_id: 1 }
  ]
}

Object.freeze(room3)
Object.freeze(room3.exits)
Object.freeze(room3.exits[0])

export default room3
