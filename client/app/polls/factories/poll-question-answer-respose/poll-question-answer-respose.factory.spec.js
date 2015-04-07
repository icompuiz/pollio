'use strict';

describe('Service: pollQuestionAnswerRespose', function () {

  // load the service's module
  beforeEach(module('pollioApp'));

  // instantiate service
  var pollQuestionAnswerRespose;
  beforeEach(inject(function (_pollQuestionAnswerRespose_) {
    pollQuestionAnswerRespose = _pollQuestionAnswerRespose_;
  }));

  it('should do something', function () {
    expect(!!pollQuestionAnswerRespose).toBe(true);
  });

});
