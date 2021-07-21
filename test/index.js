'use strict'

import { expect } from '@webmuds/development'
import { ApiMock as ApiMockFromSrc } from '../src/ApiMock.js'
import ApiMock from '../index.js'
import ApiClient from '@webmuds/api-client'

describe('main require', function () {
  before(function () {
    this.url = 'http://webmuds-test.local'
    this.mock = new ApiMock(this.url)
    this.client = new ApiClient(this.url)
  })

  it('loads ApiMock from /src', function () {
    expect(ApiMock).to.equal(ApiMockFromSrc)
  })

  it('retrieves data from local files when active', async function () {
    this.mock.start()
    const response = await this.client.get('/muds/1')
    expect(response.name).to.equal('Test MUD Number One')

    this.mock.stop()
  })

  it('restores external connectivity when stopped', async function () {
    this.mock.stop()

    // calling an inexistent URL should error out
    await expect(this.client.get('/muds/1')).to.be.rejected
  })
})
