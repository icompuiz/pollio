'use strict';

describe('Service: uniqueid', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var uniqueid;
  beforeEach(inject(function (_uniqueid_) {
    uniqueid = _uniqueid_;
  }));

  it('should do something', function () {
    expect(!!uniqueid).toBe(true);
  });

});
