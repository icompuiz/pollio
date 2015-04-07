'use strict';

describe('Controller: PollioCtrl', function () {

  // load the controller's module
  beforeEach(module('pollioApp'));

  var PollioCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PollioCtrl = $controller('PollioCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
