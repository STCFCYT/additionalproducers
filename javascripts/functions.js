// Global variables and their gains - shared across all scripts
AP = 10;
let apgain = 0;
APRone = 0;
let apronegain = 0;
APRtwo = 0;
let aprtwogain = 0;
APRthree = 0;
let aprthreegain = 0;
APRfour = 0;
let aprfourgain = 0;
APRfive = 0;
let aprfivegain = 0;
APRsix = 0;
let aprsixgain = 0;
APRseven = 0;
let aprsevengain = 0;
APReight = 0;
// Cost and multiplier tracking
costone = 10;
multone = 1;
clicksone = 0;
costtwo = 100;
multtwo = 1;
clickstwo = 0;
tickspeed = 1;
tickspeedcost = 1000;
costthree = 10000;
multthree = 1;
clicksthree = 0;
costfour = 1e6;
multfour = 1;
clicksfour = 0;
costfive = 1e9;
multfive = 1;
clicksfive = 0;
costsix = 1e12;
multsix = 1;
clickssix = 0;
costseven = 1e15;
multseven = 1;
clicksseven = 0;
costeight = 1e18;
multeight = 1;
clickseight = 0;
boostmult = 1;
tickspeedboostmult = 1;
AUone = 0;
AUtwo = 0;
AUthree = 0;
multiplications = 0;
MP = 0;
// AP and APR Gain must be assigned into different variables
function updateAPGain() {
    apgain = APRone * multone;
}
function updateAPRONEgain() {
    apronegain = APRtwo * multtwo;
}
function updateAPRTWOgain() {
    aprtwogain = APRthree * multthree;
}
function updateAPRTHREEgain() {
    aprthreegain = APRfour * multfour;
}
function updateAPRFOURgain() {
    aprfourgain = APRfive * multfive;
}
function updateAPRFIVEgain() {
    aprfivegain = APRsix * multsix;
}
function updateAPRSIXgain() {
    aprsixgain = APRseven * multseven;
}
function updateAPRSEVENgain() {
    aprsevengain = APReight * multeight;
}
// Function to update all UI displays
function updateUI() {
  if (AP < 1000000) {
    document.getElementById("ap").textContent = "You have " + Math.floor(AP) + " Addition Points.";
  } else {
    document.getElementById("ap").textContent = "You have e" + Math.floor(Math.log10(AP)*100)/100 + " Addition Points.";
  }
  if (apgain < 1000000){
    document.getElementById("ap_persec").textContent = "You are getting " + Math.floor(APRone * multone) + " AP/s";
  } else {
    document.getElementById("ap_persec").textContent = "You are getting e" + Math.floor(Math.log10(APRone * multone)*100)/100 + " AP/s";
  }
  if (costone < 1000000){
      document.getElementById("costone").textContent = "Buy a First Additional Producer for " + costone + " AP";
  } else {
      document.getElementById("costone").textContent = "Buy a First Additional Producer for e" + Math.floor(Math.log10(costone)*100)/100 + " AP";
  }
  if (APRone < 1000000){
      document.getElementById("aprone").textContent = "First Additional Producers: " + Math.floor(APRone);
  } else {
      document.getElementById("aprone").textContent = "First Additional Producers: e" + Math.floor(Math.log10(APRone)*100)/100
  }
  if (costtwo < 1000000){
      document.getElementById("costtwo").textContent = "Buy a Second Additional Producer for " + costtwo + " AP";
  } else {
      document.getElementById("costtwo").textContent = "Buy a Second Additional Producer for e" + Math.floor(Math.log10(costtwo)*100)/100 + " AP"
  }
  if (APRtwo < 1000000){ 
      document.getElementById("aprtwo").textContent = "Second Additional Producers: " + Math.floor(APRtwo);
  } else {
      document.getElementById("aprtwo").textContent = "Second Additional Producers: e" + Math.floor(Math.log10(APRtwo)*100)/100
  }
  if (costthree < 1000000){
      document.getElementById("costthree").textContent = "Buy a Third Additional Producer for " + costthree + " AP";
  } else {
      document.getElementById("costthree").textContent = "Buy a Third Additional Producer for e" + Math.floor(Math.log10(costthree)*100)/100 + " AP";
  }
  if (APRthree < 1000000){
      document.getElementById("aprthree").textContent = "Third Additional Producers: " + Math.floor(APRthree);
  } else {
      document.getElementById("aprthree").textContent = "Third Additional Producers: e" + Math.floor(Math.log10(APRthree)*100)/100 + " AP";
  }
  document.getElementById("costfour").textContent = "Buy a Fourth Additional Producer for e" + Math.floor(Math.log10(costfour)*100)/100 + " AP";
  if (APRfour < 1000000) {
    document.getElementById("aprfour").textContent = "Fourth Additional Producers: " + Math.floor(APRfour);
  } else {
    document.getElementById("aprfour").textContent = "Fourth Additional Producers: e" +  Math.floor(Math.log10(APRfour)*100)/100;
  }
  document.getElementById("costfive").textContent = "Buy a Fifth Additional Producer for e" + Math.floor(Math.log10(costfive)*100)/100 + " AP";
  if (APRfive < 1000000){
    document.getElementById("aprfive").textContent = "Fifth Additional Producers: " + Math.floor(APRfive);
  } else {
    document.getElementById("aprfive").textContent = "Fifth Additional Producers: e" + Math.floor(Math.log10(APRfive)*100)/100;
  }
  document.getElementById("costsix").textContent = "Buy a Sixth Additional Producer for e" + Math.floor(Math.log10(costsix)*100)/100 + " AP";
  if (APRsix < 1000000){
    document.getElementById("aprsix").textContent = "Sixth Additional Producers: " + Math.floor(APRsix);
  } else {
    document.getElementById("aprsix").textContent = "Sixth Additional Producers: e" + Math.floor(Math.log10(APRsix)*100)/100;
  }
  document.getElementById("costseven").textContent = "Buy a Seventh Additional Producer for e" + Math.floor(Math.log10(costseven)*100)/100 + " AP";
  if (APRseven < 1000000) {
      document.getElementById("aprseven").textContent = "Seventh Additional Producers: " + Math.floor(APRseven);
  } else {
      document.getElementById("aprseven").textContent = "Seventh Additional Producers: e" + Math.floor(Math.log10(APRseven)*100)/100;
  }
  document.getElementById("costeight").textContent = "Buy a Eighth Additional Producer for e" + Math.floor(Math.log10(costeight)*100)/100 + " AP";
  if (APReight < 1000000){
      document.getElementById("apreight").textContent = "Eighth Additional Producers: " + Math.floor(APReight);
  } else {
      document.getElementById("apreight").textContent = "Eighth Additional Producers: e" + Math.floor(Math.log10(APReight)*100)/100;
  }
  if (tickspeed < 1000000) {
      document.getElementById("tickspeed").textContent = "Tickspeed Multiplier: x" + Math.floor(tickspeed*100)/100;
  } else {
      document.getElementById("tickspeed").textContent = "Tickspeed Multiplier: xe" + Math.floor(Math.log10(tickspeed)*100)/100;
  }
  if (tickspeedcost < 1000000) {
      document.getElementById("tickspeed").textContent = "Buy a Tickspeed Upgrade for " + Math.floor(tickspeedcost) + " AP";
  } else {
      document.getElementById("tickspeed").textContent = "Buy a Tickspeed Upgrade for e" + Math.floor(Math.log10(tickspeedcost)*100)/100 + " AP";
  }
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

function TICKSPEED() {
    if (AP >= tickspeedcost) {
        tickspeed *= (tickspeedboostmult * 1.2);
        tickspeedcost *= 10;
    }
    updateUI();
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
      costfour *= 1e6;
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
      costfive *= 1e8;
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
      costsix *= 1e10;
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
      costseven *= 1e12;
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
      costeight *= 1e15;
      multeight *= 2;
    }
    updateUI();
  }
}

// Initialize UI on page load
window.addEventListener('load', updateUI);
