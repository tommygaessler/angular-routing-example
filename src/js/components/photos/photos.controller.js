(function() {

  'use strict';

  angular
    .module('myApp.components.photos', [])
    .controller('photosController', photosController);

  photosController.$inject = ['$scope', '$http'];

  function photosController($scope, $http) {

    const client_id = 'unsplash client id here';

    this.photosArray = [];

    this.username = 'tommygaessler';

    console.log();

    $http.get(`https://api.unsplash.com/users/${this.username}/photos?client_id=${client_id}`)
    .then((photos) => {
      photos.data.forEach((photo) => {
        this.photosArray.push(photo.urls.regular);
      });
    })
    .catch((error) => {
      console.log(error);
    })

    this.changeUsername = function(username) {
      $http.get(`https://api.unsplash.com/users/${username}/photos?client_id=${client_id}`)
      .then((photos) => {

        this.photosArray = photos.data.map((photo) => {
          return (photo.urls.regular);
        });
      })
      .catch((error) => {
        console.log(error);
      })
    }
  };

})();
