'use strict';

describe('Service: pollQuestionAnswer', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var pollQuestionAnswer;
  beforeEach(inject(function (_pollQuestionAnswer_) {
    pollQuestionAnswer = _pollQuestionAnswer_;
  }));

  it('should do something', function () {
    expect(!!pollQuestionAnswer).toBe(true);
  });

});
