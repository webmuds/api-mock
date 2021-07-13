'use strict'

const room9 = {
  id: 9,
  area_id: 2,
  name: 'East Room',
  description: 'This is the east room of MUD#2!',
  exits: [
    { id: 15, direction: 'west', to_room_id: 6 }
  ]
}

Object.freeze(room9)
Object.freeze(room9.exits)
Object.freeze(room9.exits[0])

export default room9
