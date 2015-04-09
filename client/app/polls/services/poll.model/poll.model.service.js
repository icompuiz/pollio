'use strict';

angular.module('pollioApp')
  .service('pollModel', function (localStorageService, poll) {
    	
    this.current = null;

    function getDb() {
    	var polls = localStorageService.get('poll.model') || {};

    	return polls;
    	
    }

    this.savePoll = function(poll) {

    	var polls = getDb();

    	polls[poll._id] = poll;

    	localStorageService.set('poll.model', polls);

    };

    this.findAll = function() {

    	var polls = getDb();

    	return polls;

    };

    this.findById = function(id) {

    	var polls = getDb();
    	var pollDoc = polls[id];
    	if (pollDoc) {
    		return poll.create(pollDoc)
    	}

    	return null;
    	
    };

  });
