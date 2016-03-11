window.onload = function() {
  document.body.addEventListener("mousemove", function() {
    var colors = toColor(event.clientX, event.clientY);
    document.body.style.backgroundColor = "#" + colors[0] + colors[1];
    document.body.innerHTML = "#" + colors[0] + colors[1];
  });
}

var toColor = function(x,y) {
    var colorX = Math.round((x / window.innerWidth)*4095);
    var colorY = Math.round((y / window.innerHeight)*4095);
    var stringX = colorX.toString(16);
    var stringY = colorY.toString(16);

    if(stringX.length < 3) {
      for(var i=0; i < 3-stringX.length; i++) {
        stringX = "0" + stringX;
      }
    }
    if(stringY.length < 3) {
      for(var j=0; j < 3-stringY.length; j++) {
        stringX = "0" + stringY;
      }
    }

    return [stringX, stringY];
}
