'use strict';

angular.module('pollioApp')
    .factory('pollRecipient', function(uniqueid) {

        function PollRecipient() {
            this._id = this._id || uniqueid.create();
            this.type = this.type || 'email';
            this.value = this.value || '';
        }

        return {
            create: function(source) {
            	if (source) {
                PollRecipient.call(source);
                return source;
            	}
              return new PollRecipient();

            }
        };
    });
