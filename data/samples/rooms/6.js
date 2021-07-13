'use strict'

const room6 = {
  id: 6,
  area_id: 2,
  name: 'Starting Room',
  description: 'This is the center room of MUD#2!',
  exits: [
    { id: 9, direction: 'north', to_room_id: 7 },
    { id: 10, direction: 'south', to_room_id: 8 },
    { id: 11, direction: 'east', to_room_id: 9 },
    { id: 12, direction: 'west', to_room_id: 10 }
  ]
}

Object.freeze(room6)
Object.freeze(room6.exits)
Object.freeze(room6.exits[0])
Object.freeze(room6.exits[1])
Object.freeze(room6.exits[2])
Object.freeze(room6.exits[3])

export default room6
