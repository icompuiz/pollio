'use strict';

angular.module('pollioApp')
    .factory('pollQuestionAnswerRespose', function() {
        function PollQuestionAnswerRespose() {}

        return {
            create: function() {
                return new PollQuestionAnswerRespose();
            }
        };
    });
