'use strict';

angular.module('pollioApp')
    .controller('AddRecipientsCtrl', function($scope, $state, $stateParams, pollModel) {

        $scope.$watch('formData.recipients', function(recipients) {

            if (!recipients) {
                return;
            }
            if (recipients.length === 0) {
                $scope.formData.addWeblink();
            }

        }, true);

        $scope.goBack = function() {
            if ($stateParams.id) {
                $state.go('polls.edit.add-questions', {
                    id: $stateParams.id
                });
            } else {
                $state.go('polls.create.add-questions');
            }
        };

        $scope.submit = function() {
            pollModel.savePoll($scope.formData);
            $state.go('polls.list');
        };

        $scope.$on('$stateChangeStart', function(event, to, toParams) {

            if (!/polls.edit/.test(to.name) && !/polls.create/.test(to.name)) {
                pollModel.current = null;
            }

        });

        if (!pollModel.current) {
            return $scope.goBack();
        }

        $scope.formData = pollModel.current;

    });
