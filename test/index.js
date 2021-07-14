'use strict'

import { expect } from '../config/test.js'
import ApiMock from '../index.js'
import { ApiMock as ApiMockFromSrc } from '../src/ApiMock.js'
import ApiClient from '@webmuds/api-client'

describe('main require', function () {
  it('loads ApiMock from /src', function () {
    expect(ApiMock).to.equal(ApiMockFromSrc)
  })

  it('retrieves data from local files', async function () {
    var url = 'http://webmuds.test'
    var mock = new ApiMock(url)
    var client = new ApiClient(url)
    var response = await client.get('/muds/1')
    expect(response.name).to.equal('Test MUD Number One')
    mock.stop()
  })
})
