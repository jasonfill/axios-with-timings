const axios = require("../index").default;

describe('Axios Tests', () => {
  test('simple request', async () => {
    const res = await axios.get('http://www.google.com');

    expect(res.request.timings).toBeDefined();
    
  })

  test('error request', async () => {
    try {
      await axios.get('http://localhost:9999')
    } catch (err) {
        expect(err.request._currentRequest.timings).toBeDefined();
    }

    expect.assertions(1)
  })
})
