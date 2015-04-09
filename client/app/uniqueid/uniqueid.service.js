'use strict';

angular.module('pollioApp')
		.factory('uniqueid', function() {
				function makeid(len) {
						len = len || 24;
						var text = '';
						var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

						for (var i = 0; i < len; i++) {
								text += possible.charAt(Math.floor(Math.random() * possible.length));
						}
						return text;
				}
				return {
						create: function() {
								return makeid(24);
						}
				};
		});
