'use strict';

angular.module('pollioApp')
    .controller('AddRecipientsCtrl', function($scope, $state, pollModel) {

        if (!pollModel.current) {
            return $state.go('polls.create.add-questions');
        }

        $scope.formData = pollModel.current;

        $scope.$watch('formData.recipients', function(recipients) {

            if (recipients.length === 0) {
                $scope.formData.addWeblink();
            }

        }, true);

    });
