'use strict'

import room1 from './rooms/1.js'
import room2 from './rooms/2.js'
import room3 from './rooms/3.js'
import room4 from './rooms/4.js'
import room5 from './rooms/5.js'
import room6 from './rooms/6.js'
import room7 from './rooms/7.js'
import room8 from './rooms/8.js'
import room9 from './rooms/9.js'
import room10 from './rooms/10.js'

const rooms = new Map()
rooms.set(room1.id, room1)
rooms.set(room2.id, room2)
rooms.set(room3.id, room3)
rooms.set(room4.id, room4)
rooms.set(room5.id, room5)
rooms.set(room6.id, room6)
rooms.set(room7.id, room7)
rooms.set(room8.id, room8)
rooms.set(room9.id, room9)
rooms.set(room10.id, room10)

export default rooms
