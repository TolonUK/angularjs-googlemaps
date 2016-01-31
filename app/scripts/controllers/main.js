/* global GoogleMapsLoader */
'use strict';

/**
 * @ngdoc function
 * @name srcApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the srcApp
 */
angular.module('srcApp')
  .controller('MainCtrl', function () {

    GoogleMapsLoader.load(function (google) {
      var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(54.5767, -1.2355)
      };

      new google.maps.Map(document.getElementById('map'), mapOptions);
    });

  });
