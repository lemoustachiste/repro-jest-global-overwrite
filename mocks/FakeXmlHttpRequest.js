class FakeXmlHttpRequest {
  open (method, url) {
    this.url = url;
  }

  send () {
    this.status = 200;
    this.responseText = this.getMockResponseText();
    this.onload();
  }

  onload () {}

  setRequestHeader () {}

  getMockResponseText () {
    switch (this.url) {
      case 'https://example.com':
        return 'it works';
    }
  }
}

module.exports = FakeXmlHttpRequest;
