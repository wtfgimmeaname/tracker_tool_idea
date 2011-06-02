//Watch javascript

/* TODOS
 * - We have many kinds of test objects.
 *		- special id for test and user
 *		- test has groups and users in groups
 *		- test has results storage
 *
 * - On load, see test requests, ajax in with
 * 		test requests and see what exists. If
 * 		
*/
		// INIT
		// get running tests, user from storage
				// gather requested test
				// ajax request in
				// send response
		// if new user, determine test placement
		// if old user, show correct test
		// write json and determine ways to save
		// setup listeners
(function() {
	var Watcher = {
		init : function(tests) {
			determineUsersPlace();	
		},
	
		ab_test : function(testCase, divisions) {
			tc 	= $(testCase);
			div	= divisions;
	
			if (tc && tc.length == 2) {	
			}
		}
	}

	function determineUsersPlace() {
		//Check html5 localstorage and cookies
		//If new user, store something special
		// and return If old user, return this.
		console.log('running');
	}

	var dummy = {
		name 		: 'title_test',
		type 		: 'ab_test',
		groups 	: [50, 50],
	}
	Watcher.init(dummy);

})();







/* IDEAS
 * - If strong computer, capture mouse movements to graph
 * - Count time on page
 * - Before and after urls
*/
