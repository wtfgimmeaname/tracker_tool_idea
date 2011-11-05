//Watch javascript

/* TODOS
 * - We have many kinds of test objects.
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
		// write json and determine ways to save
		// setup listeners
var Watcher = window.Watcher || {};

Watcher.Model = function() {
}();

Watcher.View = function() {

		// Methods for handling cookie storage
    createCookie : function cc(name,value,days) {
      var exd = new Date();
      exd.setDate(exd.getDate() + days);
      var val = escape(value) + ((days==null) ? 
        "" : "; expires="+exd.toUTCString());
      document.cookie=name + "=" + val;
    },
    readCookie : function rc(name) {
      var i,x,y,ARRcookies = document.cookie.split(";");
      for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
        x = x.replace(/^\s+|\s+$/g,"");
        if (x == name) {
          return unescape(y);
        }
      }
    },
		deleteCookie : function dc(name) {
			Watcher.View.createCookie(name,"",-1);
		}
  }
}();

Watcher.Class = function() {
	return {
	}
}();






/* IDEAS
 * - If strong computer, capture mouse movements to graph // sessionStorage
 * - Count time on page // sessionStorage?
 * - Before and after urls
 * - Time tracking
*/
