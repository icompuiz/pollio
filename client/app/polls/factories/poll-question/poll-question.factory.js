'use strict';

angular.module('pollioApp')
    .factory('pollQuestion', function(pollQuestionAnswer, uniqueid) {
        function PollQuestion() {

            this._id = this._id || uniqueid.create();

            this.type = this.type || 'multi';

            this.required = this.required || false;

            if (this.answers) {
                this.answers = this.answers.map(pollQuestionAnswer.create);
            } else {
                this.answers = [];
            }

            this.addAnswer = function() {
                this.answers.push(pollQuestionAnswer.create());
            };

            this.removeAnswer = function($index) {
                this.answers.splice($index, 1);
            }

        }

        return {
            create: function(source) {
                if (source) {
                    PollQuestion.call(source);
                    return source;
                }
                return new PollQuestion();
            }
        };
    });
