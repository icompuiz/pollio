'use strict';

angular.module('pollioApp')
    .factory('poll', function(pollQuestion, pollRecipient, uniqueid) {

        function Poll() {

            this._id = this._id || uniqueid.create();
            this.slug = this._id;

            if (this.questions) {
            	this.questions = this.questions.map(pollQuestion.create);
            } else {
            	this.questions = [];
            }

            if (this.recipients) {
            	this.recipients = this.recipients.map(pollRecipient.create);
            } else {
            	this.recipients = [];
            }

            this.addQuestion = function() {
                this.questions.push(pollQuestion.create());
            };

            this.removeQuestion = function($index) {
                this.questions.splice($index, 1);
            };
            this.addRecipient = function() {
                this.recipients.push(pollRecipient.create());
            };

            this.removeRecipient = function($index) {
                this.recipients.splice($index, 1);
            };

            this.addWeblink = function() {

                var recipient = pollRecipient.create();
                recipient.type = 'Public Link';
                recipient.value = ['http://polli.com', this.slug].join('/');

                this.recipients.push(recipient);

            };
        }

        return {
            create: function(source) {
                if (source) {
                    Poll.call(source);
                    return source;
                }
                return new Poll();
            }
        };

    });
