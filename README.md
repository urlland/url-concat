# url-concat

URL parts concatenating faithful to
[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986).

## Features

- Strict to the meaning of "concatenate"
- RFC3986 compliant
- Tiny

## concatPath

Securely concatenate URL paths. The concatenation is free of duplicate slashes.

Empty segments are ignored.

Behaves strictly according to the meaning of "concatenation". Do nothing about
anything other than the concatenation, e.g., head and tail slashes.

```ts
import { concatPath } from "https://deno.land/x/url_concat@$VERSION/mod.ts";
import { assertEquals } from "https://deno.land/std@$VERSION/testing/asserts.ts";

assertEquals(
  concatPath("/api", "v1", "/users/", "/1", "profile/"),
  "/api/v1/users/1/profile/",
);
```

## License

Copyright © 2021-present [urlland](https://github.com/urlland).

Released under the [MIT](./LICENSE) license
