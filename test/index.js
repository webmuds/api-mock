'use strict'

import { expect } from '../config/test.js'
import ApiMock from '../index.js'
import { ApiMock as ApiMockFromSrc } from '../src/ApiMock.js'

describe('main require', function () {
  it('loads ApiMock from /src', function () {
    expect(ApiMock).to.equal(ApiMockFromSrc)
  })
})
