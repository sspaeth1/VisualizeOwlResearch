$(".container").mousemove(function (event) {
  var eye_R = $(".eye_R");
  var x = eye_R.offset().left + eye_R.width() / 2;
  var y = eye_R.offset().top + eye_R.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  eye_R.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  });

  var eye_L = $(".eye_L");
  var x = eye_L.offset().left + eye_L.width() / 2;
  var y = eye_L.offset().top + eye_L.height() / 2;
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = rad * (180 / Math.PI) * -1 + 180;
  eye_L.css({
    "-webkit-transform": "rotate(" + rot + "deg)",
    "-moz-transform": "rotate(" + rot + "deg)",
    "-ms-transform": "rotate(" + rot + "deg)",
    transform: "rotate(" + rot + "deg)",
  });
});
