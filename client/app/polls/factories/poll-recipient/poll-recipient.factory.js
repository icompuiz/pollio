'use strict';

angular.module('pollioApp')
    .factory('pollRecipient', function() {
        function PollRecipient() {}

        return {
            create: function() {
                return new PollRecipient();
            }
        };
    });
