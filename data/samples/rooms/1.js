'use strict'

const room1 = {
  id: 1,
  area_id: 1,
  name: 'Starting Room',
  description: "  You are standing in the center room of MUD#1! Not much going on here. Everything is dull and there is nothing much to do other than talk to other characters... if you happen to see any.\n  You can also have multiline text in your room descriptions. You can also completely fill it with junk text if you want. Room descriptions are only downloaded once per session, and next time you look or enter this room, this giant wall o' text will not be redownloaded. Pretty cool huh.\n  There are four rooms surrounding this one, just as dull and boring, but feel free to walk around.",
  exits: [
    { id: 1, direction: 'north', to_room_id: 2 },
    { id: 2, direction: 'south', to_room_id: 3 },
    { id: 3, direction: 'east', to_room_id: 4 },
    { id: 4, direction: 'west', to_room_id: 5 }
  ]
}

Object.freeze(room1)
Object.freeze(room1.exits)
Object.freeze(room1.exits[0])
Object.freeze(room1.exits[1])
Object.freeze(room1.exits[2])
Object.freeze(room1.exits[3])

export default room1
