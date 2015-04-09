'use strict';

angular.module('pollioApp')
    .factory('pollQuestionAnswer', function(uniqueid) {
        function PollQuestionAnswer() {
            this._id = this._id || uniqueid.create();
            this.value = this.value || '';
        }

        return {
            create: function(source) {
                if (source) {
                    PollQuestionAnswer.call(source);
                    return source;
                }
                return new PollQuestionAnswer();
            }
        };
    });
