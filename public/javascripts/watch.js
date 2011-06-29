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

Watcher.Controller = function() {
  return {
    unload : function unload() {
        $.ajax({
          type: "POST",
          url: "/",
          data: "super=duper&user=dustin",
          dataType: "json"
        });
    }
  }
}();

Watcher.View = function() {
  var setAndDetermineGroup = function(t) {
    // THIS IS RANDOM FOR NOW
    var groupNum = Math.round(Math.random(t.groups.length));

    Watcher.View.createCookie(t.name, groupNum, 30);
    window.localStorage.setItem(t.name, groupNum); return groupNum;
  };

  return {
    executeAB : function exAB(t) {
      // Show user test based upon their assigned group
      var testSubj  = $('.'+t.name);
      var uGroup    = Watcher.View.getUserGroup(t);
      $(testSubj[uGroup]).show();

      //Setup userobj

      //Send onunload
      Watcher.Controller.unload();
    },
    getUserGroup : function gup(t) {
		  var storedData 	  = window.localStorage.getItem(t.name);
		  var storedCookie  = Watcher.View.readCookie(t.name);
		  if (storedCookie === undefined || storedData === null) {
        return setAndDetermineGroup(t);
      } else {
        return storedCookie;
      }
    },
		// Methods for handling cookie storage
    // Logic from w3schools
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
		init : function(t) {
      switch(t.type) {
        case "ab_test":
          Watcher.View.executeAB(t);
        default:
          return false;
      }
		}
	}
}();

var dummy = {
	name 		: 'title_test',
	type 		: 'ab_test',
	groups 	: [50, 50],
}

Watcher.Class.init(dummy);





/* IDEAS
 * - If strong computer, capture mouse movements to graph // sessionStorage
 * - Count time on page // sessionStorage?
 * - Before and after urls
 * - Time tracking
*/
