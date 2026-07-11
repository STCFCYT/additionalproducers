document.getElementById("aprtwosection").style.display = "none";
document.getElementById("aprthreesection").style.display = "none";
document.getElementById("tickspeedsection").style.display = "none";
document.getElementById("aprfoursection").style.display = "none";
document.getElementById("aprfivesection").style.display = "none";
document.getElementById("maxallsection").style.display = "none";
document.getElementById("aprsixsection").style.display = "none";
document.getElementById("aprsevensection").style.display = "none";
document.getElementById("apreightsection").style.display = "none";
setInterval(() => {
    updateAPGain();
    AP += apgain * tickspeed * boostmult * 0.05;
    if (APRone !== 0) {
        document.getElementById("aprtwosection").style.display = "block";
    }
    updateAPRONEgain();
    APRone += apronegain * tickspeed * boostmult * 0.05;
    if (APRtwo !== 0) {
        document.getElementById("aprthreesection").style.display = "block";
        document.getElementById("tickspeedsection").style.display = "block";
    }
    updateAPRTWOgain();
    APRtwo += aprtwogain * tickspeed * boostmult * 0.05;
    if (APRthree !== 0) {
        document.getElementById("aprfoursection").style.display = "block";
    }
    updateAPRTHREEgain();
    APRthree += aprthreegain * tickspeed * boostmult * 0.05;
    if (APRfour !== 0) {
        document.getElementById("aprfivesection").style.display = "block";
        document.getElementById("maxallsection").style.display = "block";
    }
    updateAPRFOURgain();
    APRfour += aprfourgain * tickspeed * boostmult * 0.05;
    if (APRfive !== 0) {
        document.getElementById("aprsixsection").style.display = "block";
    }
    updateAPRFIVEgain();
    APRfive += aprfivegain * tickspeed * boostmult * 0.05;
    if (APRsix !== 0) {
        document.getElementById("aprsevensection").style.display = "block";
    }
    updateAPRSIXgain();
    APRsix += aprsixgain * tickspeed * boostmult * 0.05;
    if (APRseven !== 0) {
        document.getElementById("apreightsection").style.display = "block";
    }
    updateAPRSEVENgain();
    APRseven += aprsevengain * tickspeed * boostmult * 0.05;
    updateUI();
}, 50);
