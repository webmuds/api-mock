'use strict'

import fs from 'fs'

const motd = fs.readFileSync('./data/samples/muds/1.motd.txt', 'utf8')

const mud1 = {
  id: 1,
  server_id: 1,
  name: 'Test MUD Number One',
  motd: motd,
  starting_area_id: 1
}

Object.freeze(mud1)

export default mud1
