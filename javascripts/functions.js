// Global variables - shared across all scripts
let AP = 10;
let APRone = 0;
let APRtwo = 0;
let APRthree = 0;
let APRfour = 0;
let APRfive = 0;
let APRsix = 0;
let APRseven = 0;
let APReight = 0;
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
  document.getElementById("costone").textContent = "Buy a First Additional Producer for " + costone + " AP";
  document.getElementById("aprone").textContent = "First Additional Producers: " + APRone;
  document.getElementById("costtwo").textContent = "Buy a Second Additional Producer for " + costtwo + " AP";
  document.getElementById("aprtwo").textContent = "Second Additional Producers: " + APRtwo;
  document.getElementById("costthree").textContent = "Buy a Third Additional Producer for " + costthree + " AP";
  document.getElementById("aprthree").textContent = "Third Additional Producers: " + APRthree;
  document.getElementById("costfour").textContent = "Buy a Fourth Additional Producer for " + costfour + " AP";
  document.getElementById("aprfour").textContent = "Fourth Additional Producers: " + APRfour;
  document.getElementById("costfive").textContent = "Buy a Fifth Additional Producer for " + costfive + " AP";
  document.getElementById("aprfive").textContent = "Fifth Additional Producers: " + APRfive;
  document.getElementById("costsix").textContent = "Buy a Sixth Additional Producer for " + costsix + " AP";
  document.getElementById("aprsix").textContent = "Sixth Additional Producers: " + APRsix;
  document.getElementById("costseven").textContent = "Buy a Seventh Additional Producer for " + costseven + " AP";
  document.getElementById("aprseven").textContent = "Seventh Additional Producers: " + APRseven;
  document.getElementById("costeight").textContent = "Buy a Eighth Additional Producer for " + costeight + " AP";
  document.getElementById("apreight").textContent = "Eighth Additional Producers: " + APReight;
}

function APRONE() {
  if (AP >= costone) {
    APRone += 1;
    AP -= costone;
    clicksone += 1;
    if (clicksone === 10) {
      clicksone = 0;
      costone *= 1000;
      multone *= 2;
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
      multtwo *= 2;
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
      multthree *= 2;
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
      multfour *= 2;
    }
    updateUI();
  }
}

function APRFIVE() {
  if (AP >= costfive) {
    APRfive += 1;
    AP -= costfive;
    clicksfive += 1;
    if (clicksfive === 10) {
      clicksfive = 0;
      costfive *= 100000000;
      multfive *= 2;
    }
    updateUI();
  }
}

function APRSIX() {
  if (AP >= costsix) {
    APRsix += 1;
    AP -= costsix;
    clickssix += 1;
    if (clickssix === 10) {
      clickssix = 0;
      costsix *= 10000000000;
      multsix *= 2;
    }
    updateUI();
  }
}

function APRSEVEN() {
  if (AP >= costseven) {
    APRseven += 1;
    AP -= costseven;
    clicksseven += 1;
    if (clicksseven === 10) {
      clicksseven = 0;
      costseven *= 1000000000000;
      multseven *= 2;
    }
    updateUI();
  }
}

function APREIGHT() {
  if (AP >= costeight) {
    APReight += 1;
    AP -= costeight;
    clickseight += 1;
    if (clickseight === 10) {
      clickseight = 0;
      costeight *= 1000000000000000;
      multeight *= 2;
    }
    updateUI();
  }
}

// Initialize UI on page load
window.addEventListener('load', updateUI);
function wait(s) {
  return new Promise(resolve => setTimeout(resolve, s));
}
