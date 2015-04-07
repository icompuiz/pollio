'use strict';

describe('Service: pollRecipient', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var pollRecipient;
  beforeEach(inject(function (_pollRecipient_) {
    pollRecipient = _pollRecipient_;
  }));

  it('should do something', function () {
    expect(!!pollRecipient).toBe(true);
  });

});
