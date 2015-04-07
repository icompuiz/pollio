'use strict';

angular.module('pollioApp')
  .factory('poll', function (pollQuestion, pollRecipient) {

    function Poll() {

    	this.slug = 'r9er9d';
    	this.questions = [];
    	this.recipients = [];

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
      create: function() {
        return new Poll();
      }
    };

  });
