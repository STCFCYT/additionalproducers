// Global variables - shared across all scripts
let AP = 10;
let APRone = 0;
let APRtwo = 0;
let APRthree = 0;
let APRfour = 0;

// Cost and multiplier tracking
let costone = 10;
let multone = 1;
let clicksone = 0;
let costtwo = 100;
let multtwo = 1;
let clickstwo = 0;
let tickspeedcost = 1000;
let tickspeed = 1;
let costthree = 10000;
let multthree = 1;
let clicksthree = 0;
let costfour = 1000000;
let multfour = 1;
let clicksfour = 0;
let costfive = 1000000000;
let multfive = 1;
let clicksfive = 0;
let costsix = 1000000000000;
let multsix = 1;
let clickssix = 0;
let costseven = 1000000000000000;
let multseven = 1;
let clicksseven = 0;
let costeight = 1000000000000000000;
let multeight = 1;
let clickseight = 0;

// Function to update all UI displays
function updateUI() {
  document.getElementById("ap").textContent = "You have " + AP + " Addition Points.";
  document.getElementById("aprone").textContent = "First Additional Producers: " + APRone;
  document.getElementById("aprtwo").textContent = "Second Additional Producers: " + APRtwo;
  document.getElementById("aprthree").textContent = "Third Additional Producers: " + APRthree;
  document.getElementById("aprfour").textContent = "Fourth Additional Producers: " + APRfour;
}

function APRONE() {
  if (AP >= costone) {
    APRone += 1;
    AP -= costone;
    clicksone += 1;
    if (clicksone === 10) {
      clicksone = 0;
      costone *= 1000;
    }
    updateUI();
  }
}

function APRTWO() {
  if (AP >= costtwo) {
    APRtwo += 1;
    AP -= costtwo;
    clickstwo += 1;
    if (clickstwo === 10) {
      clickstwo = 0;
      costtwo *= 10000;
    }
    updateUI();
  }
}

function APRTHREE() {
  if (AP >= costthree) {
    APRthree += 1;
    AP -= costthree;
    clicksthree += 1;
    if (clicksthree === 10) {
      clicksthree = 0;
      costthree *= 100000;
    }
    updateUI();
  }
}

function APRFOUR() {
  if (AP >= costfour) {
    APRfour += 1;
    AP -= costfour;
    clicksfour += 1;
    if (clicksfour === 10) {
      clicksfour = 0;
      costfour *= 1000000;
    }
    updateUI();
  }
}

// Initialize UI on page load
window.addEventListener('load', updateUI);
