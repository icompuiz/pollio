'use strict';

describe('Service: pollQuestion', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var pollQuestion;
  beforeEach(inject(function (_pollQuestion_) {
    pollQuestion = _pollQuestion_;
  }));

  it('should do something', function () {
    expect(!!pollQuestion).toBe(true);
  });

});
