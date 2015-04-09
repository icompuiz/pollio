'use strict';

angular.module('pollioApp')
    .factory('pollQuestionAnswerRespose', function() {
        function PollQuestionAnswerRespose() {

            this.answer = this.answer || null;

        }

        return {
            create: function(source) {
                if (source) {
                    PollQuestionAnswerRespose.call(source);
                    return source;
                }
                return new PollQuestionAnswerRespose();
            }
        };
    });

