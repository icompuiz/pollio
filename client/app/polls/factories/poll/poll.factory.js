'use strict';

angular.module('pollioApp')
  .factory('poll', function (pollQuestion) {

    function Poll() {

    	this.questions = [];

    	this.addQuestion = function() {
    		this.questions.push(pollQuestion.create());
    	};

    	this.removeQuestion = function($index) {
    		this.questions.splice($index, 1);
    	};

    }

    return {
      create: function() {
        return new Poll();
      }
    };

  });
