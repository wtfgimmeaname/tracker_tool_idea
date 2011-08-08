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
  var ABDataObj = function(g) {
    var data = {
      testGroup : g,
      referrer  : document.referrer,
      startTime : new Date(),
    }; return data;
  };

  return {
    init : function(dataType, group) {
      switch(dataType) {
        case 0 : //AB test
          return ABDataObj(group);
        default :
          return false;
      }
    }
  }
}();

Watcher.Controller = function() {
  return {
    unload : function ul(dataObj) {
      console.log(dataObj);
      $('.send_data').click(function() {
        dataObj.endTime = new Date();
        $.post("/home/watcher", dataObj, function(data) {
          console.log(data);
        })
        .success(function() {})
        .error(function() {})
        .complete(function() {});
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
      var testSubj  = $('.'+t.name);
      var uGroup    = Watcher.View.getUserGroup(t);
      $(testSubj[uGroup]).show();

      var dataObject = Watcher.Model.init(0, uGroup);
      Watcher.Controller.unload(dataObject);
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
		ABTest : function(t) {
      Watcher.View.executeAB(t);
		}
	}
}();

var dummy = {
	name 		: 'title_test',
	groups 	: [50, 50],
}

Watcher.Class.ABTest(dummy);





/* IDEAS
 * - If strong computer, capture mouse movements to graph // sessionStorage
 * - Count time on page // sessionStorage?
 * - Before and after urls
 * - Time tracking
*/
