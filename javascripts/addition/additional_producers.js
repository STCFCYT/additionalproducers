setInterval(() => {
    updateAPGain();
    AP += apgain * 0.05;
    if ((APRone !== 0) || (multiplications !== 0)) {
        document.getElementById("aprtwosection").style.display = "block";
    } else {
        document.getElementById("aprtwosection").style.display = "none";
    }
    updateAPRONEgain();
    APRone += apronegain * 0.05;
    updateAPRTWOgain();
    APRtwo += aprtwogain * 0.05;
    updateAPRTHREEgain();
    APRthree += aprthreegain * 0.05;
    updateAPRFOURgain();
    APRfour += aprfourgain * 0.05;
    updateAPRFIVEgain();
    APRfive += aprfivegain * 0.05;
    updateAPRSIXgain();
    APRsix += aprsixgain * 0.05;
    updateAPRSEVENgain();
    APRseven += aprsevengain * 0.05;
    updateUI();
}, 50);
