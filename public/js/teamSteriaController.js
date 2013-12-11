
var teamSteriaController; // Definerer en global variabel for aa holde paa controlleren vaar

(function () {    // *
    "use strict"; // *

    // AngularJS controller
    // Verdier som legges paa $scope er 'public' metoder som kan brukes fra komponenten i html
    // $http er et hjelpeobjekt som kan brukes til aa kommunisere over http (http://docs.angularjs.org/api/ng.$http)
    teamSteriaController = function ($scope, $http) {

        // Denne funksjonen eksponerer parameteret på users-variabelen på $scope,
        // og users kan derfor brukes av angular-direktiver
        $scope.init = function(users) {
            $scope.users = users;
        };

    };

}());

