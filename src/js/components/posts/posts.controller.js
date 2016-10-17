(function() {

  'use strict';

  angular
    .module('myApp.components.posts', [])
    .controller('postsController', postsController);

  postsController.$inject = ['$scope'];

  function postsController($scope) {
    /*jshint validthis: true */
    this.nums = [1, 2, 3, 4, 5];
  }

})();
