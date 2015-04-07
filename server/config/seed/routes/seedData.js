'use strict';
var buildStatus = require('../seedUtils').buildStatus;


// Route access control definitions. These ACOs are used to verify that a particular user as access to a particular route.

// Default Access control definitions
// name - the name of the group
// access - the access levels (read/create)

var pub = {
	name: 'public',
	access: {
		read: true,
		create: true
	}
};
var admin = {
	name: 'administrators',
	access: {
		read: true,
		create: true
	}
};
var users = {
	name: 'users',
	access: {
		read: true,
		create: true
	}
};

var all = [admin, users, pub];
var authenticated = [admin, users];

var routes = {


	'/': all,
	'/404': all,
	'/login': all,
	'/register': all,

	"/api/areas": authenticated,
	"/api/areas/:param1": authenticated,
	"/api/buildings": authenticated,
	"/api/buildings/:param1": authenticated,
	"/api/campuses": authenticated,
	"/api/campuses/:param1": authenticated,
	"/api/clients": authenticated,
	"/api/clients/:param1": authenticated,
	"/api/client2s": authenticated,
	"/api/client2s/:param1": authenticated,
	"/api/configtemplates": authenticated,
	"/api/configtemplates/:param1": authenticated,
	"/api/configTemplates": authenticated,
	"/api/configTemplates/:param1": authenticated,
	"/api/dampers": authenticated,
	"/api/dampers/:param1": authenticated,
	"/api/dampersurveys": authenticated,
	"/api/dampersurveys/:param1": authenticated,
	"/api/diskimages": authenticated,
	"/api/diskimages/:param1": authenticated,
	"/api/diskImages": authenticated,
	"/api/diskImages/:param1": authenticated,
	"/api/floors": authenticated,
	"/api/floors/:param1": authenticated,
	"/api/imageTemplates/:param1": authenticated,
	"/api/imageTemplates": authenticated,
	"/api/imagetemplates/:param1": authenticated,
	"/api/imagetemplates": authenticated,
	"/api/logs": authenticated,
	"/api/logs/:param1": authenticated,
	"/api/lookups": authenticated,
	"/api/lookups/:param1": authenticated,
	"/api/nodes": authenticated,
	"/api/nodes/:param1": authenticated,
	"/api/orgs": authenticated,
	"/api/orgs/:param1": authenticated,
	"/api/realms": authenticated,
	"/api/realms/:param1": authenticated,
	"/api/trees": authenticated,
	"/api/trees/:param1": authenticated,
	'/api/orgTree/areas/:param1': authenticated,
	'/api/orgTree/buildings/:param1': authenticated,
	'/api/orgTree/clients': authenticated,
	'/api/orgTree/campuses/:param1': authenticated,
	'/api/orgTree/dampers/:param1': authenticated,
	'/api/orgTree/floors/:param1': authenticated,
	'/api/orgTree/floorMenu/:param1': authenticated,
	'/api/orgTree/floorMenuChildren/:param1': authenticated,
	'/api/orgTree/floorplans/:param1': authenticated,
	'/api/orgTree/orgs': authenticated,
	'/api/orgTree/orgs/:param1': authenticated,
	'/api/realmTree/realmMenu/:param1': authenticated,
	'/api/realmTree/realmMenuChildren/:param1': authenticated,
	'/api/realmTree/diskImages/:param1': authenticated,
	'/api/realmTree/nodes/:param1': authenticated,
	'/api/realmTree/realms/:param1': authenticated,
	'/api/realmTree/orgs': authenticated,
	'/api/realmTree/orgs/:param1': authenticated,
	'/api/realmTree/trees/:param1': authenticated,
	'/api/realmTree/trees/:param1/:param2': authenticated,
	'/api/realmTree/configTmplRoots/:param1': authenticated,
	'/api/realmTree/configTemplates/:param1': authenticated,
	'/api/realmTree/imageTemplates/:param1': authenticated,
	'/api/floorplan': authenticated,
	'/api/floorplan/image': authenticated,
	'/api/floorplan/:param1': authenticated,
	'/api/floorplan/:param1/image': authenticated,

	// Express Routes: API - Auto-generated by node-resful based controller routes - ALPHABETICAL ORDER

	'/api/directories': authenticated,
	'/api/directories/:param1': authenticated,
	'/api/directories/:param1/files': authenticated,
	'/api/files': authenticated,
	'/api/files/:param1': authenticated,
	'/api/files/:param1/download': authenticated,
	'/api/files/:param1/downloaddelete': authenticated,
	'/api/files/:param1/file': authenticated,
	'/api/fileSystem': authenticated,
	'/api/fileSystem/search': authenticated,

	'/api/floorplans': authenticated,
	'/api/floorplans/:param1': authenticated,
	'/api/floorplans/damper': authenticated,
	'/api/floorplans/damper/:param1': authenticated,
	'/api/groups': [admin],
	'/api/groups/:param1': [admin],
	'/api/users': [admin],
	'/api/users/:param1': authenticated,

	// Expres Routes: API - Custom Controllers (e.g. not node-restful)
	'/api/permissions/aclExpand': authenticated,
	'/api/permissions/aclExpand/:param1': authenticated,
	'/api/permissions/aclGetEditData': authenticated,
	'/api/permissions/aclGetEditData/:param1': authenticated,
	'/api/userManagerTree/groups': authenticated,
	'/api/userManagerTree/groups/:param1': authenticated,
	'/api/userManagerTree/userManagerMenu': authenticated,
	'/api/userManagerTree/users': authenticated,
	'/api/userManagerTree/users/:param1': authenticated,

	'/api/buildings/:param1/treepath': authenticated,
	'/api/campuses/:param1/treepath': authenticated,
	'/api/floors/:param1/treepath': authenticated,
	'/api/areas/:param1/treepath': authenticated,
	'/api/floorplans/:param1/treepath': authenticated,

	'/api/admintree': authenticated,
	'/api/admintree/accounts': authenticated,
	'/api/admintree/accounts/users': authenticated,
	'/api/admintree/accounts/groups': authenticated,

	'/api/command/who': all,


	'/home': authenticated,
	'/logout': authenticated,


	// angular route permissions - ALPHABETICAL ORDER
	'/admin': authenticated,
	'/buildings/:param1': authenticated,
	'/campuses/:param1': authenticated,
	'/clients2': authenticated,
	'/damperSurveyDash': authenticated,
	'/editform': authenticated,
	'/floorplan': authenticated,
	'/floorplan/new': authenticated,
	'/floorplan/edit/:param1': authenticated,
	'/leftNav': authenticated,
	'/logs': authenticated,
	'/lookups': authenticated,
	'/lookups2': authenticated,
	'/realmNav': authenticated,

	//adHoc:
	'adhoc:activeUser': authenticated
};

module.exports = routes;