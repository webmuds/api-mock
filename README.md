# @webmuds/api-mock

[![build](https://github.com/webmuds/api-mock/actions/workflows/node.js.yml/badge.svg)](https://github.com/webmuds/api-mock/actions/workflows/node.js.yml)

## Usage

```javascript
import ApiMock from "@webmuds/api-mock"

var mock = new ApiMock("http://webmuds.test")

mock.start()

/*
 * Examples of mocked URLs:
 *
 * - http://webmuds.test/muds/1
 * - http://webmuds.test/muds/2/areas
 * 
 * Just call those URLs in your project as you'd normally do,
 * and they will be intercepted by this library.
 * 
 * For a full list of available resources, check the `data` folder.
 */

mock.stop() // to restore calling original URLs
```
