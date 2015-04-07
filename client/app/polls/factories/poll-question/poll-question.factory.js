'use strict';

angular.module('pollioApp')
    .factory('pollQuestion', function(pollQuestionAnswer) {
        function PollQuestion() {

        	this.type = 'multi';
        	
        	this.answers = [];

        	this.addAnswer = function() {
        		this.answers.push(pollQuestionAnswer.create());
        	};

        	this.removeAnswer = function($index) {
        		this.answers.splice($index, 1);
        	}

        }

        return {
            create: function() {
                return new PollQuestion();
            }
        };
    });
