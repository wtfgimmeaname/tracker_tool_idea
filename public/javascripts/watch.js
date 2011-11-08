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
  var count = 1;
  var coord = {};

  function init() {
    document.onmousemove = getMouseCoords;
    window.onscroll = windowOffset;
    var docheight = document.height;
    var docwidth  = document.width;
  }

  function windowOffset(evt) {
    ox = window.pageXOffset;
    oy = window.pageYOffset;
    var data = { type: 0, cnt:count, x:ox, y:oy }
    console.log(data);
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
    count += 1;
    var data = { type: 1, cnt:count, x:px, y:py }
    console.log(data);
  }

  return {
    init : init
  }
})();

$(document).ready(HotMaus.init);
