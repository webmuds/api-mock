'use strict'

import Nock from 'nock'

import servers from '../data/samples/servers.js'
// import server1mudIds from '../../data/samples/servers/1.mud_ids.js'
import muds from '../data/samples/muds.js'
import areas from '../data/samples/areas.js'
import rooms from '../data/samples/rooms.js'
import characters from '../data/samples/characters.js'

export class ApiMock {
  constructor (url) {
    this.url = url
  }

  start () {
    const api = Nock(this.url).persist()
    this.nock = api

    api.get('/servers/1').reply(200, servers.get(1))
    // api.get('/servers/1/mud_ids').reply(200, server1mudIds)

    api.get('/muds/1').reply(200, muds.get(1))
    api.get('/muds/2').reply(200, muds.get(2))

    api.get('/muds/1/areas').reply(200, [areas.get(1)])
    api.get('/muds/2/areas').reply(200, [areas.get(2)])

    api.get('/muds/1/areas/1/rooms').reply(200, [rooms.get(1), rooms.get(2), rooms.get(3), rooms.get(4), rooms.get(5)])
    api.get('/muds/2/areas/2/rooms').reply(200, [rooms.get(6), rooms.get(7), rooms.get(8), rooms.get(9), rooms.get(10)])

    api.get('/muds/1/characters/1').reply(200, characters.get(1))
    api.get('/muds/1/characters/2').reply(200, characters.get(2))
    api.get('/muds/2/characters/3').reply(200, characters.get(3))
    api.get('/muds/2/characters/4').reply(200, characters.get(4))
    api.get('/muds/1/characters/5').reply(200, characters.get(5))
    api.get('/muds/1/characters/6').reply(200, characters.get(6))

    api.post('/muds/1/characters/1/server_authorize', { token: characters.get(1).login_key }).reply(200, characters.get(1))
    api.post('/muds/1/characters/2/server_authorize', { token: characters.get(2).login_key }).reply(200, characters.get(2))
    api.post('/muds/2/characters/3/server_authorize', { token: characters.get(3).login_key }).reply(200, characters.get(3))
    api.post('/muds/2/characters/4/server_authorize', { token: characters.get(4).login_key }).reply(200, characters.get(4))
    api.post('/muds/1/characters/5/server_authorize', { token: characters.get(5).login_key }).reply(200, characters.get(5))
    api.post('/muds/1/characters/6/server_authorize', { token: characters.get(6).login_key }).reply(200, characters.get(6))
    api.post('/muds/:mud_id/characters/:character_id/server_authorize', body => body.token).reply(401) // any other token

    // This allows Nock to restart if it has been #restore()'d.
    if (!Nock.isActive()) {
      Nock.activate()
    }
  }

  stop () {
    Nock.restore()
  }
}
