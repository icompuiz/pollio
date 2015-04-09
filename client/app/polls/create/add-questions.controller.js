'use strict';

angular.module('pollioApp')
    .controller('AddQuestionsCtrl', function($scope, $state, $stateParams, poll, pollModel) {

        $scope.$watch('formData.questions', function(questions) {

            if (!questions) {
                return;
            }

            if (questions.length === 0) {
                $scope.formData.addQuestion();
            }

        }, true);

        $scope.submit = function() {
            if ($stateParams.id) {
                $state.go('polls.edit.add-recipients', {
                    id: $stateParams.id
                });
            } else {
                $state.go('polls.create.add-recipients');
            }
        };

        $scope.$on('$stateChangeStart', function(event, to, toParams) {

            if (!/polls.edit/.test(to.name) && !/polls.create/.test(to.name)) {
                pollModel.current = null;
            }

        });

        if (!pollModel.current && $stateParams.id) {
            pollModel.current = pollModel.findById($stateParams.id);
        }

        if (!pollModel.current) {
            pollModel.current = poll.create();
        }

        $scope.formData = pollModel.current;


    });
