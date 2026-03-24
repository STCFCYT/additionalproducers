document.getElementById("addition_subtabs-btn").style.display = "none";
setInterval(() => {
    updateAPGain();
    if (AP >= (1e60)) {
    document.getElementById("addition_subtabs-btn").style.display = "block";
    }
    AP += apgain * 0.05;
    if ((APRone !== 0) || (multiplications !== 0)) {
        document.getElementById("aprtwosection").style.display = "block";
    } else {
        document.getElementById("aprtwosection").style.display = "none";
    }
    updateAPRONEgain();
    APRone += apronegain * 0.05;
    if ((APRtwo !== 0) || (multiplications !== 0)) {
        document.getElementById("aprthreesection").style.display = "block";
    } else {
        document.getElementById("aprthreesection").style.display = "none";
    }
    updateAPRTWOgain();
    APRtwo += aprtwogain * 0.05;
    if ((APRthree !== 0) || (multiplications !== 0)) {
        document.getElementById("aprfoursection").style.display = "block";
    } else {
        document.getElementById("aprfoursection").style.display = "none";
    }
    updateAPRTHREEgain();
    APRthree += aprthreegain * 0.05;
    if ((APRfour !== 0) || (multiplications !== 0)) {
        document.getElementById("aprfivesection").style.display = "block";
    } else {
        document.getElementById("aprfivesection").style.display = "none";
    }
    updateAPRFOURgain();
    APRfour += aprfourgain * 0.05;
    if ((APRfive !== 0) || (multiplications !== 0)) {
        document.getElementById("aprsixsection").style.display = "block";
    } else {
        document.getElementById("aprsixsection").style.display = "none";
    }
    updateAPRFIVEgain();
    APRfive += aprfivegain * 0.05;
    if ((APRsix !== 0) || (multiplications !== 0)) {
        document.getElementById("aprsevensection").style.display = "block";
    } else {
        document.getElementById("aprsevensection").style.display = "none";
    }
    updateAPRSIXgain();
    APRsix += aprsixgain * 0.05;
    if ((APRseven !== 0) || (multiplications !== 0)) {
        document.getElementById("apreightsection").style.display = "block";
    } else {
        document.getElementById("apreightsection").style.display = "none";
    }
    updateAPRSEVENgain();
    APRseven += aprsevengain * 0.05;
    updateUI();
}, 50);
