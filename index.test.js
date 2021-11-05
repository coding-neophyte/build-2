const getMethod = require('./index.js');

describe('getMethod', () => {
  it('returns the method from a request', () => {
    const Request = `GET / HTTP/1.1
Host: example.com
Accept-Language: us-en`;

    const method = getMethod(Request);

    expect(method).toEqual('GET');
  });
});
