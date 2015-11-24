'use strict';

angular
    .module('compufscar')
    .controller('AuthorsController', AuthorsController);

AuthorsController.$inject = ['$http'];

function AuthorsController($http) {
    var vm = this;

    vm.load = function () {
        console.log('Loading authors...');

        $http({method: 'GET', url: 'data/authors.json'})
            .success(function (data, status, headers, config) {
                vm.authors = data;
            })
            .error(function(data, status) {
                console.log(data);
                console.log(status);
            });
    }
}
