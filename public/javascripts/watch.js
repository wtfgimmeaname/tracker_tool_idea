/*
 * HotMaus javascript
 *
 * Capture mouse movements to graph
 * Count time on page 
 * Before and after urls
 * Time tracking
 *
 */
var HotMaus = window.HotMaus || {};

HotMaus = (function() {
  var count;
  var coord = {};

  function init() {
    //document.onmousemove = getMouseCoords;
    window.onscroll = windowOffset;
  }

  function windowOffset(evt) {
    wx = window.screenX;
    wy = window.screenY;
    console.log(wx + " is window x and y is " + wy);
  }

  function getMouseCoords(evt) {
    var px; var py;
    var evt = event || window.event;
    if (evt.pageX || evt.pageY) {
      px = evt.pageX;
      py = evt.pageY;
    } else if (evt.clientX || evt.clientY) {
      px = evt.clientX + document.body.scrollLeft
         + document.documentElement.scrollLeft;
      py = evt.clientY + document.body.scrollTop
         + document.documentElement.scrollTop;
    }

    var tst = { count:1, x:px, y:py }
    console.log(tst);
  }

  return {
    init : init
  }
})();

$(document).ready(HotMaus.init);
