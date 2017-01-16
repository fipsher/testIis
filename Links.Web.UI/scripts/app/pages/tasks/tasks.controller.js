(function (angular) {

    angular
        .module("linksModule")
        .controller("LinksController", LinksController);

    LinksController.$inject = ['$scope', "linksService"];

    function LinksController($scope, linksService) {
        var vm = this;
        vm.links = [];

         vm.newlinkDescription = "";
       // vm.newTaskTitle = "";

        vm.newlinkPath = "";
        vm.newlinkName = "";

        vm.onAddNewLink = onAddNewLink;

        vm.isNewLinkDescriptionValid = isNewLinkDescriptionValid;
        vm.isNewLinkNameValid = isNewLinkNameValid;
        vm.isNewLinkPathValid = isNewLinkPathValid;

        activate();

        function activate() {
            var linksPromise = linksService.getLinks();
            linksPromise.then(function (response) {
                console.log("[LinksController] linksPromise - ", response);
                $scope.$applyAsync(function () {
                    vm.links.push.apply(vm.links, response.data);
                });
            });
        }

        function onAddNewLink() {
            console.log("[LinksController] onAddNewLinks - ", arguments);
            var newLink = { Id: 0, Description: vm.newlinkDescription, Path: vm.newlinkPath, Name: vm.newlinkName};
            linksService
                .addLink(newLink)
                .then(function (response) {
                    console.log("[LinksController] onAddNewLink - success", arguments);
                    vm.links.push(response.data);
                    vm.newlinkDescription = "";
                    vm.newlinkName = "";
                    vm.newlinkPath = "";
                }, function (response) {
                    console.log("[LinksController] onAddNewLink - fail", arguments);
                    alert("Adding a new Link has failed.");
                });
        }

        function isNewLinkDescriptionValid() {
            console.log('isNewLinkDescriptionValid', angular.isString(vm.newlinkDescription) && vm.newlinkDescription.length >= 0 && vm.newlinkDescription.length <= 250);
            return (angular.isString(vm.newlinkDescription) && vm.newlinkDescription.length >= 1 && vm.newlinkDescription.length <= 250);
        }
        function isNewLinkNameValid() {
            console.log('isNewLinkNameValid', angular.isString(vm.newlinkName) && vm.newlinkName.length >= 1 && vm.newlinkName.length <= 100);
            return (angular.isString(vm.newlinkName) && vm.newlinkName.length >= 1 && vm.newlinkName.length <= 100);
        }
        function isNewLinkPathValid() {
            console.log('isNewLinkPathValid', angular.isString(vm.newlinkPath) && vm.newlinkPath.length >= 1 && vm.newlinkPath.length <= 250);
            return (angular.isString(vm.newlinkPath) && vm.newlinkPath.length >= 1 && vm.newlinkPath.length <= 250);
        }
    }

})(angular);