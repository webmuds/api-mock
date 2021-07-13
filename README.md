# @webmuds/api-mock

## Usage

```javascript
import ApiMock from "@webmuds/api-mock"

var mock = new ApiMock("webmuds.test")

/*
 * Examples of mocked URLs:
 *
 * - webmuds.test/muds/1
 * - webmuds.test/muds/2/areas
 * 
 * Just call those URLs in your project as you'd normally do,
 * and they will be intercepted by this library.
 */

mock.stop() // to restore calling original URLs
```
