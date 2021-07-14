'use strict'

import fs from 'fs'

const motd = fs.readFileSync(new URL('./1.motd.txt', import.meta.url), 'utf8')

const mud1 = {
  id: 1,
  server_id: 1,
  name: 'Test MUD Number One',
  motd: motd,
  starting_area_id: 1
}

Object.freeze(mud1)

export default mud1
