'use strict'

const room4 = {
  id: 4,
  area_id: 1,
  name: 'East Room',
  description: 'This is the east room of MUD#1!',
  exits: [
    { id: 7, direction: 'west', to_room_id: 1 }
  ]
}

Object.freeze(room4)
Object.freeze(room4.exits)
Object.freeze(room4.exits[0])

export default room4
