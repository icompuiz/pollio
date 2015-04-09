'use strict';

angular.module('pollioApp', [
				'ngCookies',
				'ngResource',
				'ngSanitize',
				'btford.socket-io',
				'ui.router',
				'ui.bootstrap',
				'restangular',
				'LocalStorageModule'
		])
		.config(function($stateProvider, $urlRouterProvider, $locationProvider, RestangularProvider, localStorageServiceProvider) {
				$urlRouterProvider
						.otherwise('/');

				$locationProvider.html5Mode(true);

				RestangularProvider.setBaseUrl('/api');

				RestangularProvider.setRestangularFields({
						id: '_id'
				});

				localStorageServiceProvider
						.setPrefix('pollioApp')
						.setStorageType('sessionStorage')
						.setNotify(true, true)

		});
