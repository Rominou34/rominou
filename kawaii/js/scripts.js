function displayBubble() {
  document.getElementById('bubble').style.display = "block";
}

function hideBubble() {
  document.getElementById('bubble').style.display = "none";
}

function randomSize() {
  var rand = Math.random();
  var size = 60 + Math.round(60*rand);
  return size+"px";
}

function randomDuration() {
  var rand = Math.random();
  return 3+(Math.round(5*rand))+"s";
}

function randomPosition() {
  var rand = Math.random();
  return 100*rand+"vw";
}

function randomFlower() {
  var rand = Math.random();
  return "img/flower-"+Math.round(rand*2)+".png";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateFlowers(num) {
  var flowers_container = document.querySelector("#flowers");
  for(var i=0; i<12; i++) {
    var oImg = document.createElement("img");
    oImg.setAttribute('src', randomFlower());
    oImg.setAttribute('class', 'flower');
    oImg.style.width = randomSize();
    oImg.style.left = randomPosition();
    oImg.style.animation = "rotate 1.5s linear 0s infinite, fall "+randomDuration()+" ease-in 0s infinite";
    flowers_container.appendChild(oImg);
    await sleep(1000);
  }
}
window.onload = function() {

  generateFlowers(8);
}
