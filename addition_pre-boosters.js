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
function APRONE() {
  APRone += 1;
  AP -= 10;
  clicksone += 1;
  if (clicksone === 10) {
    clicksone = 0;
    costone *= 1000;
  }
}
function APRTWO() {
  APRtwo += 1;
  AP -= 100;
  clickstwo += 1;
  if (clickstwo === 10) {
    clickstwo = 0;
    costtwo *= 10000;
  }
}
function APRTHREE() {
  APRthree += 1;
  AP -= 10000;
  clicksthree += 1;
  if (clicksthree === 10) {
    clicksthree = 0;
    costthree *= 100000;
  }
}
function APRFOUR() {
  APRfour += 1;
  AP -= 1000000;
  clicksfour += 1;
  if (clicksfour === 10) {
    clicksfour = 0;
    costfour *= 1000000;
  }
}
