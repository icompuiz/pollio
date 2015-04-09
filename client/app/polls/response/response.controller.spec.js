'use strict';

describe('Controller: ResponseCtrl', function () {

  // load the controller's module
  beforeEach(module('pollioApp'));

  var ResponseCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResponseCtrl = $controller('ResponseCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
