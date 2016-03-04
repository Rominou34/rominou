function displayBubble() {
  document.getElementById('bubble').style.display = "block";
}

function hideBubble() {
  document.getElementById('bubble').style.display = "none";
}

/* Because fuck doing a querySelectorAll and looping to add the EventListeners */

//GUNDERE
var gundereDiv = document.querySelector("#gundere-project span:nth-child(3)");
var gundereDesc = document.querySelector("#gundere-project p");

gundereDiv.addEventListener("click", function( event ) {
  if(gundereDesc.style.display == "none") {
    gundereDesc.style.display = "block";
  } else {
    gundereDesc.style.display = "none";
  }
});

//AZUNYAN
var azunyanDiv = document.querySelector("#azunyan-project span:nth-child(3)");
var azunyanDesc = document.querySelector("#azunyan-project p");

azunyanDiv.addEventListener("click", function( event ) {
  if(azunyanDesc.style.display == "none") {
    azunyanDesc.style.display = "block";
  } else {
    azunyanDesc.style.display = "none";
  }
});

//MADOKA
var madokaDiv = document.querySelector("#madoka-project span:nth-child(3)");
var madokaDesc = document.querySelector("#madoka-project p");

madokaDiv.addEventListener("click", function( event ) {
  if(madokaDesc.style.display == "none") {
    madokaDesc.style.display = "block";
  } else {
    madokaDesc.style.display = "none";
  }
});

//HARUHI
var haruhiDiv = document.querySelector("#haruhi-project span:nth-child(3)");
var haruhiDesc = document.querySelector("#haruhi-project p");

haruhiDiv.addEventListener("click", function( event ) {
  if(haruhiDesc.style.display == "none") {
    haruhiDesc.style.display = "block";
  } else {
    haruhiDesc.style.display = "none";
  }
});

//KONATA
var konataDiv = document.querySelector("#konata-project span:nth-child(3)");
var konataDesc = document.querySelector("#konata-project p");

konataDiv.addEventListener("click", function( event ) {
  if(konataDesc.style.display == "none") {
    konataDesc.style.display = "block";
  } else {
    konataDesc.style.display = "none";
  }
});

//ML
var mlDiv = document.querySelector("#ml-project span:nth-child(3)");
var mlDesc = document.querySelector("#ml-project p");

mlDiv.addEventListener("click", function( event ) {
  if(mlDesc.style.display == "none") {
    mlDesc.style.display = "block";
  } else {
    mlDesc.style.display = "none";
  }
});
