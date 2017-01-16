(function (angular) {

    angular
        .module("linksModule")
        .factory("linksService", linksService);

    linksService.$inject = ["$http"];

    function linksService($http) {

        var service = {
            getLinks: getLinksAjax,
            addLink: addLink,
            updateLink: updateLink
        };

        return service;

        function getLinksAjax() {
            var promise = $http.get("/Links/GetLinks");
            return promise;
        }

        function getLinks() {
            if (localStorage.links) {
                return JSON.parse(localStorage.links);
            } else {
                return [];
            }
        }

        function addLink(link) {
            var promise = $http.post("/Links/AddLink", link);
            return promise;
        }

        function updateLink(link) {
            var promise = $http.post("/Link/UpdateLink", link);
            return promise;
        }

    }

})(angular);