'use strict';

describe('Service: fetchingService', function () {

  // load the service's module
  beforeEach(module('moviesInsiderApp'));

  // instantiate service
  var fetchingService;
  beforeEach(inject(function (_fetchingService_) {
    fetchingService = _fetchingService_;
  }));

  it('should do something', function () {
    expect(!!fetchingService).toBe(true);
  });

});
