'use strict';

angular
    .module('compufscar')
    .controller('MembersController', MembersController);

MembersController.$inject = ['config', '$resource'];

function MembersController(config, $resource) {
    var vm = this;
    var Members = $resource(config.base + 'orgs/Comp-UFSCar/members')

    vm.load = function () {
        console.log('Loading Members...');
        vm.members = Members.query();
    }
}
