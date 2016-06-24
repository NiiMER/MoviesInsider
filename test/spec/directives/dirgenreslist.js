'use strict';

describe('Directive: dirGenresList', function () {

  // load the directive's module
  beforeEach(module('moviesInsiderApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dir-genres-list></dir-genres-list>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dirGenresList directive');
  }));
});
