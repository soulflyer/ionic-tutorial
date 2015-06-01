angular.module('starter.services', ['ngResource'])
    .factory('Position', function ($resource) {
        return $resource('http://localhost:5000/positions/:positionID');
    });
