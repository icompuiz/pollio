'use strict';

angular.module('pollioApp')
    .factory('pollQuestionAnswer', function() {
        function PollQuestionAnswer() {

        	this.value = '';

        }

        return {
            create: function() {
                return new PollQuestionAnswer();
            }
        };
    });
