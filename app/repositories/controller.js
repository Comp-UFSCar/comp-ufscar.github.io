'use strict';

angular
    .module('compufscar')
    .controller('RepositoriesController', RepositoriesController);

RepositoriesController.$inject = ['$resource', 'config'];

function RepositoriesController($resource, config) {
    var vm = this;
    var Repositories = $resource(config.base + 'orgs/Comp-UFSCar/repos');

    vm.load = function () {
        console.log('Loading repositories...');

        vm.repositories = Repositories.query();
    }
}
