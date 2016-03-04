/*---------- HEX CLOCK ---------*/
hexClock();
setInterval(hexClock, 1000);

function hexClock() {
    var d = new Date();
    var ho = d.getHours();
    if(ho < 10) {
        ho = "0"+ho;
    }
    var mi = d.getMinutes();
    if(mi < 10) {
        mi = "0"+mi;
    }
    var se = d.getSeconds();
    if(se < 10) {
        se = "0"+se;
    }
    document.getElementById("clock").innerHTML = "#"+ho+mi+se;
    document.getElementById("hex-clock").style.backgroundColor = "#"+ho+mi+se;
}

/* ---------- SOLAR SYSTEM ----------*/
var solarWidth = document.getElementById('solar-system').offsetWidth;
var speedPar = 1;
console.log(solarWidth);

var count = [0, 315, 240, 680, 825, 210, 1400, 950, 725, 0];
var years = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var counter = ["mer-count", "ven-count", "ear-count", "mar-count", "jup-count",
    "sat-count", "ura-count", "nep-count", "plu-count", "moon-count"];

startPos(100, "mercury-planet", 0);
startPos(150, "venus-planet", 1);
earthPos(200, "earth-planet", 2, 9);
startPos(260, "mars-planet", 3);
startPos(320, "jupiter-planet", 4);
startPos(380, "saturn-planet", 5);
startPos(440, "uranus-planet", 6);
startPos(500, "neptune-planet", 7);
startPos(540, "pluto-planet", 8);

function startSolar() {
    setInterval(solarSys, 10);
    document.getElementById("solarButton").style.display = "none";
    document.getElementById("solarBlocker").style.display = "none";
}

function solarSys() {
    planetRot(88, 100, "mercury-planet", 0);
    planetRot(224, 150, "venus-planet", 1);
    earthRot(365, 200, "earth-planet", 2, 9);
    planetRot(686, 260, "mars-planet", 3);
    planetRot(4332, 320, "jupiter-planet", 4);
    planetRot(10759, 380, "saturn-planet", 5);
    planetRot(30685, 440, "uranus-planet", 6);
    planetRot(60189, 500, "neptune-planet", 7);
    planetRot(90465, 540, "pluto-planet", 8);
}

function startPos() {
    var ori = arguments[0];
    var pli = arguments[1];
    var coi = count[arguments[2]];

    var xi = ori*Math.cos(coi);
    var yi = ori*Math.sin(coi);
    var posXi = (solarWidth/2)+xi;
    var posYi = 900+yi;

    document.getElementById(pli).style.left= posXi+"px";
    document.getElementById(pli).style.top= posYi+"px";
}

function earthPos() {
    /*--- EARTH ---*/
    var orE = arguments[0];
    var pl = arguments[1];
    var coE = count[arguments[2]];

    var x = orE*Math.cos(coE);
    var y = orE*Math.sin(coE);
    var posX = (solarWidth/2)+x;
    var posY = 900+y;

    document.getElementById(pl).style.left= posX+"px";
    document.getElementById(pl).style.top= posY+"px";

    /*--- MOON ---*/
    orM = 24;
    var coMi = count[arguments[3]];

    var xi = orM*Math.cos(coMi);
    var yi = orM*Math.sin(coMi);
    var posiX = posX+xi+12;
    var posiY = posY+yi+12;

    document.getElementById("moon-planet").style.left= posiX+"px";
    document.getElementById("moon-planet").style.top= posiY+"px";

}

function planetRot() {
    var sp = arguments[0];
    var or = arguments[1];
    var pl = arguments[2];
    var co = count[arguments[3]];
    var cou = counter[arguments[3]];
    var ye = years[arguments[3]];

    var x = or*Math.cos(co);
    var y = or*Math.sin(co);
    var posX = (solarWidth/2)+x;
    var posY = 900+y;

    document.getElementById(pl).style.left= posX+"px";
    document.getElementById(pl).style.top= posY+"px";
    document.getElementById(cou).innerHTML = (ye/(Math.PI*2)).toFixed(2);
    count[arguments[3]] = (co+(1/sp)*speedPar)%(Math.PI*2);
    years[arguments[3]] = ye+(1/sp)*speedPar;
}

function earthRot() {
    /*--- EARTH ---*/
    var sp = arguments[0];
    var or = arguments[1];
    var pl = arguments[2];
    var co = count[arguments[3]];
    var cou = counter[arguments[3]];
    var ye = years[arguments[3]];

    var x = or*Math.cos(co);
    var y = or*Math.sin(co);
    var posX = (solarWidth/2)+x;
    var posY = 900+y;

    document.getElementById(pl).style.left= posX+"px";
    document.getElementById(pl).style.top= posY+"px";
    document.getElementById(cou).innerHTML = (ye/(Math.PI*2)).toFixed(2);
    count[arguments[3]] = (co+(1/sp)*speedPar)%(Math.PI*2);
    years[arguments[3]] = ye+(1/sp)*speedPar;

    /*--- MOON ---*/
    var spM = 40;
    var orM = 24;
    var coM = count[arguments[4]];
    var couM = counter[arguments[4]];
    var yeM = years[arguments[4]];

    var xi = orM*Math.cos(coM);
    var yi = orM*Math.sin(coM);
    var posiX = posX+xi+12;
    var posiY = posY+yi+12;

    document.getElementById("moon-planet").style.left= posiX+"px";
    document.getElementById("moon-planet").style.top= posiY+"px";
    document.getElementById(couM).innerHTML = (yeM/(Math.PI*2)).toFixed(2);
    count[arguments[4]] = (coM+(1/spM)*speedPar);
    years[arguments[4]] = yeM+(1/spM)*speedPar;
}

function planetSpeed() {
    speedPar = arguments[0];
}

/*------------------   PLANES   -----------------------*/
/*
var planeWidth = document.getElementById('planes').offsetWidth;
var planeCount = 0;
var planeSpeed = [278, 2130, 3540, 24000];
setInterval(movePlanes, 10);

function movePlanes() {
  document.getElementById("dr400-plane").style.left = (planeSpeed[0]/800*planeCount)%planeWidth+"px";
  document.getElementById("rafale-plane").style.left = (planeSpeed[1]/800*planeCount)%planeWidth+"px";
  document.getElementById("blackbird-plane").style.left = (planeSpeed[2]/800*planeCount)%planeWidth+"px";
  //document.getElementById("minuteman-plane").style.left = (planeSpeed[3]/800*planeCount)%planeWidth+"px";
  planeCount++;
}*/

/*----------------- HTML PLAYGROUND ------------------*/
var runJs = function() {
  var htmlInput = document.querySelector("#html-input").value;
  var cssInput = document.querySelector("#css-input").value;
  var scriptInput = document.querySelector("#js-input").value;

  var text = "<html><style>"+cssInput+"</style><body>"+htmlInput;
  var iframe = document.getElementById("js-output");
  var doc;

  if(iframe.contentDocument) {
      doc = iframe.contentDocument;
  } else {
      doc = iframe.contentWindow.document;
  }
  doc.body.innerHTML = text;
  var scr   = document.createElement("script");
  scr.type  = "text/javascript";
  scr.text  = scriptInput;
  doc.body.appendChild(scr);
}

/*---------------- CSS3 GENERATOR -------------------*/

var runCss = function() {
  var cssBlock = document.querySelector("#css3-block");
  var cssRules = document.querySelector("#css3-rules");
  cssRules.style.display = "block";
  cssRules.innerHTML = "/* Box rules */<br/>";

  /*----- BOX CSS -----*/
  var backgColor = document.querySelector("#bg-color-input").value;
  cssBlock.style.backgroundColor = backgColor;
  cssRules.innerHTML += "background-color: " + backgColor + ";";

  var borderWidth = document.querySelector("#border-width-input").value;
  var borderColor = document.querySelector("#border-color-input").value;
  var bordStyle = document.querySelector("#border-style-input");
  var borderStyle = bordStyle.options[bordStyle.selectedIndex].value;
  cssBlock.style.border = borderWidth + "px " + borderStyle + " " + borderColor;
  cssRules.innerHTML += "<br/>border: " + borderWidth + "px " + borderStyle + " " + borderColor + ";";

  var borderRadTL = document.querySelector("#border-radius-tl-input").value;
  var borderRadTR = document.querySelector("#border-radius-tr-input").value;
  var borderRadBR = document.querySelector("#border-radius-br-input").value;
  var borderRadBL = document.querySelector("#border-radius-bl-input").value;
  var borderRadius = borderRadTL + "px " + borderRadTR + "px " +
  borderRadBR + "px " + borderRadBL + "px";
  cssBlock.style.borderRadius = borderRadius;
  cssRules.innerHTML += "<br/>border-radius: " + borderRadius +
  ";<br/>-webkit-border-radius: " + borderRadius + ";";

  var shadowV = document.querySelector("#shadow-v-input").value;
  var shadowH = document.querySelector("#shadow-h-input").value;
  var shadowBlur = document.querySelector("#shadow-blur-input").value;
  var shadowSpread = document.querySelector("#shadow-spread-input").value;
  var shadowColor = document.querySelector("#shadow-color-input").value;
  var shadowInset = document.querySelector("#shadow-inset-input").checked;
  cssBlock.style.boxShadow = shadowV + "px " + shadowH + "px " + shadowBlur +
  "px " + shadowSpread + "px " + shadowColor;
  if(shadowInset) {
    cssBlock.style.boxShadow += " inset";
  }
  cssRules.innerHTML += "<br/>box-shadow: " + shadowV + "px " + shadowH + "px " +
  shadowBlur + "px " + shadowSpread + "px " + shadowColor + ";<br/>-webkit-box-shadow: "
  + shadowV + "px " + shadowH + "px " + shadowBlur + "px " + shadowSpread + "px " +
  shadowColor + ";";

  /*----- TEXT CSS -----*/
  var textColor = document.querySelector("#text-color-input").value;
  cssBlock.style.color = textColor;
  cssRules.innerHTML += "<br/><br/>/* Text rules */<br/>color: " + textColor + ";";

  var fontFamily = document.querySelector("#font-family-input").value;
  var fontS = document.querySelector("#font-style-input");
  var fontStyle = fontS.options[fontS.selectedIndex].value;
  var fontW = document.querySelector("#font-weight-input");
  var fontWeight = fontW.options[fontW.selectedIndex].value;
  var fontSize = document.querySelector("#font-size-input").value;

  cssBlock.style.font = fontStyle + " " + fontWeight + " " + fontSize +
  "px " + fontFamily;
  cssRules.innerHTML += "<br/>font-family: " + fontFamily + ";";
  cssRules.innerHTML += "<br/>font-size: " + fontSize + "px;";
  cssRules.innerHTML += "<br/>font-style: " + fontStyle + ";";
  cssRules.innerHTML += "<br/>font-weight: " + fontWeight + ";";

  var tShadowV = document.querySelector("#t-shadow-v-input").value;
  var tShadowH = document.querySelector("#t-shadow-h-input").value;
  var tShadowBlur = document.querySelector("#t-shadow-blur-input").value;
  var tShadowColor = document.querySelector("#t-shadow-color-input").value;
  cssBlock.style.textShadow = tShadowV + "px " + tShadowH + "px " + tShadowBlur +
  "px " + tShadowColor;
  cssRules.innerHTML += "<br/>text-shadow: " + tShadowV + "px " + tShadowH + "px "
  + tShadowBlur + "px " + tShadowColor + ";";
}

/*
 * function planetRot() {
    var sp = arguments[0];
    var or = arguments[1];
    var pl = arguments[2];
    var co = count[arguments[3]];
    var cou = counter[arguments[3]];
    var ye = years[arguments[3]];

    var x = or*Math.cos(co);
    var y = or*Math.sin(co);
    var posX = 600+x;
    var posY = 800+y;

    document.getElementById(pl).style.left= posX+"px";
    document.getElementById(pl).style.top= posY+"px";
    document.getElementById(cou).innerHTML = (ye/(Math.PI*2)).toFixed(2);
    count[arguments[3]] = (co+(1/sp))%sp;
    years[arguments[3]] = ye+(1/sp);
}

function moonRot() {
    var spM = 20;
    var orM = 20;
    var coM = count[arguments[0]];
    var couM = counter[arguments[0]];
    var yeM = years[arguments[0]];

    var xi = orM*Math.cos(coM);
    var yi = orM*Math.sin(coM);
    var posiX = document.getElementById("earth-planet").style.top+xi;
    var posiY = (document.getElementById("earth-planet").style.left)+yi;

    document.getElementById("moon-planet").style.left= posiX+"px";
    document.getElementById("moon-planet").style.top= posiY+"px";
    document.getElementById(couM).innerHTML = (yeM/(Math.PI*2)).toFixed(2);
    count[arguments[0]] = coM+(1/spM);
    years[arguments[0]] = yeM+(1/spM);
}
 */
