'use strict';

angular.module('pollioApp')
    .factory('pollRecipient', function() {
        
        function PollRecipient() {
        	this.type = 'email';
        	this.value = '';
        }

        return {
            create: function() {
                return new PollRecipient();
            }
        };
    });
