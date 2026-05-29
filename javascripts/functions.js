document.getElementById("optionstabsection").style.display = "none";
document.getElementById("boostersection").style.display = "none";
// Global variables and their gains - shared across all scripts
saveinterval = 5;
let saveIntervalId = null;
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
// "saved" is defined after global variables
let saved = { 
        AP: AP,
        Producers:[APRone, APRtwo, APRthree, APRfour, APRfive, APRsix, APRseven, APReight],
        Gains:[apgain, apronegain, aprtwogain, aprthreegain, aprfourgain, aprfivegain, aprsixgain, aprsevengain],
        Costs:[costone, costtwo, costthree, costfour, costfive, costsix, costseven, costeight],
        Clicks:[clicksone, clickstwo, clicksthree, clicksfour, clicksfive, clickssix, clicksseven, clickseight],
        Multipliers:[multone, multtwo, multthree, multfour, multfive, multsix, multseven, multeight],
        TickspeedConfig:[tickspeed, tickspeedcost],
}
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

// Function to update button affordability classes
function updateButtonStates() {
    const buttons = [
        { element: document.getElementById("costone"), cost: costone },
        { element: document.getElementById("costtwo"), cost: costtwo },
        { element: document.getElementById("tickspeedcost"), cost: tickspeedcost },
        { element: document.getElementById("costthree"), cost: costthree },
        { element: document.getElementById("costfour"), cost: costfour },
        { element: document.getElementById("costfive"), cost: costfive },
        { element: document.getElementById("costsix"), cost: costsix },
        { element: document.getElementById("costseven"), cost: costseven },
        { element: document.getElementById("costeight"), cost: costeight }
    ];
    
    buttons.forEach(btn => {
        if (btn.element) {
            if (AP >= btn.cost) {
                btn.element.classList.remove("unaffordable");
                btn.element.classList.add("affordable");
            } else {
                btn.element.classList.remove("affordable");
                btn.element.classList.add("unaffordable");
            }
        }
    });
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
      document.getElementById("tickspeedcost").textContent = "Buy a Tickspeed Upgrade for " + Math.floor(tickspeedcost) + " AP";
  } else {
      document.getElementById("tickspeedcost").textContent = "Buy a Tickspeed Upgrade for e" + Math.floor(Math.log10(tickspeedcost)*100)/100 + " AP";
  }
  if (Math.log10(AP) > 25) {
      if (Math.log10(AP) > boostmult) {
          document.getElementById("boostersection").style.display = "block";
      } else {
          document.getElementById("boostersection").style.display = "none";
      }
  } else {
      document.getElementById("boostersection").style.display = "none";
  }
  
  // Update button states
  updateButtonStates();
}
function SAVE() {
  saved.AP = AP;
  saved.apgain = apgain;
  saved.Producers = [APRone, APRtwo, APRthree, APRfour, APRfive, APRsix, APRseven, APReight];
  saved.Gains = [apgain, apronegain, aprtwogain, aprthreegain, aprfourgain, aprfivegain, aprsixgain, aprsevengain];
  saved.Costs = [costone, costtwo, costthree, costfour, costfive, costsix, costseven, costeight];
  saved.Clicks = [clicksone, clickstwo, clicksthree, clicksfour, clicksfive, clickssix, clicksseven, clickseight];
  saved.Multipliers = [multone, multtwo, multthree, multfour, multfive, multsix, multseven, multeight];
  saved.TickspeedConfig = [tickspeed, tickspeedcost];
  // Save the current timestamp for offline progress tracking
  saved.lastSaveTime = Date.now();
  localStorage.setItem("APRSave", JSON.stringify(saved));
}

function startSaveInterval() {
    if (saveIntervalId !== null) {
        clearInterval(saveIntervalId);
    }
    saveIntervalId = setInterval(() => {
        SAVE()
    }, (saveinterval * 1000))
}

function changeSaveInterval(value) {
    saveinterval = parseInt(value);
    document.getElementById("saveIntervalDisplay").textContent = saveinterval;
    startSaveInterval();
}

// Calculate offline progress based on elapsed time
function calculateOfflineProgress(elapsedMs) {
    const seconds = Math.floor(elapsedMs / 1000);
    // Cap offline time at 24 hours to prevent abuse
    const cappedSeconds = Math.min(seconds, 24 * 60 * 60);
    
    // Calculate AP gain from all producers
    let totalAPGain = apgain;
    
    // Apply tickspeed multiplier
    const offlineAPGain = totalAPGain * cappedSeconds * tickspeed;
    
    return {
        offlineAPGain: offlineAPGain,
        elapsedSeconds: cappedSeconds,
        capped: seconds > (24 * 60 * 60)
    };
}

// Show offline progress popup
function showOfflineProgressPopup(progress) {
    // Create overlay
    const overlay = document.createElement("div");
    overlay.id = "offline-popup-overlay";
    overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 9998; display: flex; align-items: center; justify-content: center;";
    
    // Create popup container
    const popup = document.createElement("div");
    popup.id = "offline-popup";
    popup.style.cssText = "background: #85868a; border: 3px solid #ff0000; border-radius: 12px; padding: 30px; text-align: center; z-index: 9999; max-width: 500px; color: white; font-family: 'IBM Plex Mono', monospace;";
    
    // Format the AP gain
    let apGainText;
    if (progress.offlineAPGain < 1000000) {
        apGainText = Math.floor(progress.offlineAPGain) + " AP";
    } else {
        apGainText = "e" + Math.floor(Math.log10(progress.offlineAPGain) * 100) / 100 + " AP";
    }
    
    // Format elapsed time
    const hours = Math.floor(progress.elapsedSeconds / 3600);
    const minutes = Math.floor((progress.elapsedSeconds % 3600) / 60);
    const secs = progress.elapsedSeconds % 60;
    let timeText = "";
    if (hours > 0) timeText += hours + "h ";
    if (minutes > 0) timeText += minutes + "m ";
    timeText += secs + "s";
    
    const cappedMessage = progress.capped ? "<p style='color: #ffff00; font-size: 12px;'>(Capped at 24 hours)</p>" : "";
    
    popup.innerHTML = `
        <h2 style="color: #00ff00; margin-top: 0;">Welcome Back!</h2>
        <p style="font-size: 18px; margin: 15px 0;">While you were away for:</p>
        <p style="font-size: 20px; color: #00ff00; font-weight: bold; margin: 10px 0;">${timeText}</p>
        <p style="font-size: 16px; margin: 15px 0;">You earned:</p>
        <p style="font-size: 24px; color: #ffff00; font-weight: bold; margin: 10px 0;">${apGainText}</p>
        ${cappedMessage}
        <button id="offline-popup-close" style="background: #ffffff; color: black; padding: 12px 30px; border-radius: 8px; border: 2px solid #00ff00; font-size: 16px; cursor: pointer; margin-top: 20px;">Close</button>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Close button handler
    document.getElementById("offline-popup-close").addEventListener("click", () => {
        overlay.remove();
    });
}

// Check for offline progress on load
function checkOfflineProgress() {
    const savedData = JSON.parse(localStorage.getItem("APRSave"));
    if (!savedData || !savedData.lastSaveTime) return;
    
    const now = Date.now();
    const lastSaveTime = savedData.lastSaveTime;
    const elapsedMs = now - lastSaveTime;
    
    // Only show popup if offline for at least 10 seconds
    if (elapsedMs > 10000) {
        const progress = calculateOfflineProgress(elapsedMs);
        AP += progress.offlineAPGain;
        showOfflineProgressPopup(progress);
        updateUI();
    }
}

function LOAD(data) {
    const savedData = data || JSON.parse(localStorage.getItem("APRSave"));
    if (!savedData) return;
    
    AP = savedData.AP || AP;
    
    // Load Producers
    if (savedData.Producers && Array.isArray(savedData.Producers)) {
        APRone = savedData.Producers[0] || 0;
        APRtwo = savedData.Producers[1] || 0;
        APRthree = savedData.Producers[2] || 0;
        APRfour = savedData.Producers[3] || 0;
        APRfive = savedData.Producers[4] || 0;
        APRsix = savedData.Producers[5] || 0;
        APRseven = savedData.Producers[6] || 0;
        APReight = savedData.Producers[7] || 0;
    }
    
    // Load Gains
    if (savedData.Gains && Array.isArray(savedData.Gains)) {
        apgain = savedData.Gains[0] || 0;
        apronegain = savedData.Gains[1] || 0;
        aprtwogain = savedData.Gains[2] || 0;
        aprthreegain = savedData.Gains[3] || 0;
        aprfourgain = savedData.Gains[4] || 0;
        aprfivegain = savedData.Gains[5] || 0;
        aprsixgain = savedData.Gains[6] || 0;
        aprsevengain = savedData.Gains[7] || 0;
    }
    
    // Load Costs
    if (savedData.Costs && Array.isArray(savedData.Costs)) {
        costone = savedData.Costs[0] || 10;
        costtwo = savedData.Costs[1] || 100;
        costthree = savedData.Costs[2] || 10000;
        costfour = savedData.Costs[3] || 1e6;
        costfive = savedData.Costs[4] || 1e9;
        costsix = savedData.Costs[5] || 1e12;
        costseven = savedData.Costs[6] || 1e15;
        costeight = savedData.Costs[7] || 1e18;
    }
    
    // Load Clicks
    if (savedData.Clicks && Array.isArray(savedData.Clicks)) {
        clicksone = savedData.Clicks[0] || 0;
        clickstwo = savedData.Clicks[1] || 0;
        clicksthree = savedData.Clicks[2] || 0;
        clicksfour = savedData.Clicks[3] || 0;
        clicksfive = savedData.Clicks[4] || 0;
        clickssix = savedData.Clicks[5] || 0;
        clicksseven = savedData.Clicks[6] || 0;
        clickseight = savedData.Clicks[7] || 0;
    }
    
    // Load Multipliers
    if (savedData.Multipliers && Array.isArray(savedData.Multipliers)) {
        multone = savedData.Multipliers[0] || 1;
        multtwo = savedData.Multipliers[1] || 1;
        multthree = savedData.Multipliers[2] || 1;
        multfour = savedData.Multipliers[3] || 1;
        multfive = savedData.Multipliers[4] || 1;
        multsix = savedData.Multipliers[5] || 1;
        multseven = savedData.Multipliers[6] || 1;
        multeight = savedData.Multipliers[7] || 1;
    }
    
    // Load TickspeedConfig
    if (savedData.TickspeedConfig && Array.isArray(savedData.TickspeedConfig)) {
        tickspeed = savedData.TickspeedConfig[0] || 1;
        tickspeedcost = savedData.TickspeedConfig[1] || 1000;
    }
    
    updateUI();
}
function EXPORT() {
    try {
        SAVE();
        const json = JSON.stringify(saved);
        // UTF-8 encode → Base64
        const utf8 = new TextEncoder().encode(json);
        const encoded = btoa(String.fromCharCode.apply(null, utf8));
        // Copy to clipboard and show feedback
        navigator.clipboard.writeText(encoded).then(() => {
            alert("Save code copied to clipboard!");
        }).catch(() => {
            alert("Failed to copy to clipboard. Save code: " + encoded);
        });

        return encoded;
    } catch (e) {
        alert("Export failed: " + e);
        return "";
    }
}

function IMPORT() {
    try {
        const raw = document.getElementById("importBox").value.trim();
        if (!raw) {
            alert("Import box is empty!");
            return;
        }

        // Base64 → UTF-8 decode
        const binary = atob(raw);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        const json = new TextDecoder().decode(bytes);

        const data = JSON.parse(json);
        LOAD(data);

        alert("Import successful!");
    } catch (e) {
        alert("Invalid or corrupted save code!");
        console.error(e);
    }
}
window.onload = function() {
    LOAD();
    checkOfflineProgress();
    startSaveInterval();
}
document.getElementById("fullReset").addEventListener("click", () => {
    localStorage.clear();
    location.reload();
});
function ADDITIONTAB() {
    document.getElementById("additiontabsection").style.display = "block";
    document.getElementById("optionstabsection").style.display = "none";
}
function OPTIONSTAB() {
    document.getElementById("additiontabsection").style.display = "none";
    document.getElementById("optionstabsection").style.display = "block";
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
        tickspeed *= (tickspeedboostmult * 1.125);
        AP -= tickspeedcost
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

function MAXALL() {
    while (AP > tickspeedcost){
      TICKSPEED();
    }
    while (AP > costone){
      APRONE();
    }
    while (AP > costtwo){
      APRTWO();
    }
    while (AP > costthree){
      APRTHREE();
    }
    while (AP > costfour){
      APRFOUR();
    }
    while (AP > costfive){
      APRFIVE();
    }
    while (AP > costsix){
      APRSIX();
    }
    while (AP > costseven){
      APRSEVEN();
    }
    while (AP > costeight){
      APREIGHT();
    }
}

function BOOST() {
    // Update boostmult to log10(AP)
    boostmult = Math.log10(AP);
    
    // Reset all game progress except boostmult
    AP = 10;
    apgain = 0;
    APRone = 0;
    apronegain = 0;
    APRtwo = 0;
    aprtwogain = 0;
    APRthree = 0;
    aprthreegain = 0;
    APRfour = 0;
    aprfourgain = 0;
    APRfive = 0;
    aprfivegain = 0;
    APRsix = 0;
    aprsixgain = 0;
    APRseven = 0;
    aprsevengain = 0;
    APReight = 0;
    
    // Reset costs
    costone = 10;
    costtwo = 100;
    costthree = 10000;
    costfour = 1e6;
    costfive = 1e9;
    costsix = 1e12;
    costseven = 1e15;
    costeight = 1e18;
    
    // Reset multipliers
    multone = 1;
    multtwo = 1;
    multthree = 1;
    multfour = 1;
    multfive = 1;
    multsix = 1;
    multseven = 1;
    multeight = 1;
    
    // Reset clicks
    clicksone = 0;
    clickstwo = 0;
    clicksthree = 0;
    clicksfour = 0;
    clicksfive = 0;
    clickssix = 0;
    clicksseven = 0;
    clickseight = 0;
    
    // Reset tickspeed
    tickspeed = 1;
    tickspeedcost = 1000;
    
    // Update UI
    updateUI();
    SAVE();
}

// Initialize UI on page load
window.addEventListener('load', updateUI);
