const { forTestingPurposes } = require('../src/source.js');
const { FakeXmlHttpRequest } = require('../mocks/FakeXmlHttpRequest.js');

global.XMLHttpRequest = FakeXmlHttpRequest;

describe('jest repro', function () {
  it('should not overwrite the global object', function () {
    expect(forTestingPurposes()).toBe(true);
  });
});
