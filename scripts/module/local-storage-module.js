var appServices = angular.module('todoApp', ['ui.bootstrap']);

appServices.factory('localStorageService', function() {
  return {
    set: function(key, value) {
      localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {

      localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse(localStorage[key] || '{}');
    }
  }
});
