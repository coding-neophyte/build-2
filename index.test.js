const getMethod = require('./index.js');

describe('getMethod', () => {
  it('returns the method from a request', () => {
    const Request = `GET / HTTP/1.1\r
Host: this.com\r
Accept-Language: us-en \r`;

    const method = getMethod(Request);

    expect(method).toEqual('GET');
  });
});
