'use strict';

describe('Service: poll.model', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var poll.model;
  beforeEach(inject(function (_poll.model_) {
    poll.model = _poll.model_;
  }));

  it('should do something', function () {
    expect(!!poll.model).toBe(true);
  });

});
