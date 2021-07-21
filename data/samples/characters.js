'use strict'

import character1 from './characters/1.js'
import character2 from './characters/2.js'
import character3 from './characters/3.js'
import character4 from './characters/4.js'
import character5 from './characters/5.js'
import character6 from './characters/6.js'

const characters = new Map()
characters.set(character1.id, character1)
characters.set(character2.id, character2)
characters.set(character3.id, character3)
characters.set(character4.id, character4)
characters.set(character5.id, character5)
characters.set(character6.id, character6)

export default characters
