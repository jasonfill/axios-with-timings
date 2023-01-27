# Purpose
This is a [axios](https://axios-http.com) wrapper that will add request timings to the output. The request timings uses the work from the [szmarczak/http-timer](https://github.com/szmarczak/http-timer) library. 

# Usage
```
const axios = require("axios-with-timers").default;

const res = await axios.get("http://www.google.com");

console.log(res.request.timings);

// {
//   start: 1572712180361,
//   socket: 1572712180362,
//   lookup: 1572712180415,
//   connect: 1572712180571,
//   upload: 1572712180884,
//   response: 1572712181037,
//   end: 1572712181039,
//   error: undefined,
//   abort: undefined,
//   phases: {
//     wait: 1,
//     dns: 53,
//     tcp: 156,
//     request: 313,
//     firstByte: 153,
//     download: 2,
//     total: 678
//   }
// }

```

# Timer Output



Returns: `Object`

**Note**: The time is a `number` representing the milliseconds elapsed since the UNIX epoch.

- `start` - Time when the request started.
- `socket` - Time when a socket was assigned to the request.
- `lookup` - Time when the DNS lookup finished.
- `connect` - Time when the socket successfully connected.
- `secureConnect` - Time when the socket securely connected.
- `upload` - Time when the request finished uploading.
- `response` - Time when the request fired `response` event.
- `end` - Time when the response fired `end` event.
- `error` - Time when the request fired `error` event.
- `abort` - Time when the request fired `abort` event.
- `phases`
	- `wait` - `timings.socket - timings.start`
	- `dns` - `timings.lookup - timings.socket`
	- `tcp` - `timings.connect - timings.lookup`
	- `tls` - `timings.secureConnect - timings.connect`
	- `request` - `timings.upload - (timings.secureConnect || timings.connect)`
	- `firstByte` - `timings.response - timings.upload`
	- `download` - `timings.end - timings.response`
	- `total` - `(timings.end || timings.error || timings.abort) - timings.start`