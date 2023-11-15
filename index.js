window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

const VenTxt = document.getElementById('venus-text');
const Veninfo = document.getElementById('venus-info');



function makeVenusOP(){
    VenTxt.style.opacity = "1";
    VenTxt.style.animation = "animation-popup 0.45s";
    Veninfo.style.opacity = "1";
    Veninfo.style.animation = "animation-popup 0.45s";
}

function makeVenusOFF(){
    VenTxt.style.opacity = "0";
    VenTxt.style.animation = "animation-pooff 0.8s";
    Veninfo.style.opacity = "0";
    Veninfo.style.animation = "animation-pooff 0.45s";
}


const MerTxT = document.getElementById('mercury-Txt');
const VenTxt2 = document.getElementById('mercury-info');


function makeMercuryOP(){
    MerTxT.style.opacity = "1";
    MerTxT.style.animation = "animation-popup 0.45s";
    VenTxt2.style.opacity = "1";
    VenTxt2.style.animation = "animation-popup 0.45s";
}

function makeMercuryOFF(){
    MerTxT.style.opacity = "0";
    MerTxT.style.animation = "animation-pooff 0.8s";
    VenTxt2.style.opacity = "0";
    VenTxt2.style.animation = "animation-pooff 0.45s";
}

const EarthTxT = document.getElementById('earth-info');
const Earthinfo = document.getElementById('earth-text');


function makeEarthOP(){
    EarthTxT.style.opacity = "1";
    EarthTxT.style.animation = "animation-popup 0.45s";
    Earthinfo.style.opacity = "1";
    Earthinfo.style.animation = "animation-popup 0.45s";
}

function makeEarthOFF(){
    EarthTxT.style.opacity = "0";
    EarthTxT.style.animation = "animation-pooff 0.8s";
    Earthinfo.style.opacity = "0";
    Earthinfo.style.animation = "animation-pooff 0.45s";
}


const MarsTxT = document.getElementById('mars-text');
const Marsinfo = document.getElementById('mars-info');


function makeMarsOP(){
    MarsTxT.style.opacity = "1";
    MarsTxT.style.animation = "animation-popup 0.45s";
    Marsinfo.style.opacity = "1";
    Marsinfo.style.animation = "animation-popup 0.45s";
}

function makeMarsOFF(){
    MarsTxT.style.opacity = "0";
    MarsTxT.style.animation = "animation-pooff 0.8s";
    Marsinfo.style.opacity = "0";
    Marsinfo.style.animation = "animation-pooff 0.45s";
}


const jupiterTxT = document.getElementById('jupiter-text');
const jupiterinfo = document.getElementById('jupiter-info');


function makejupiterOP(){
    jupiterTxT.style.opacity = "1";
    jupiterTxT.style.animation = "animation-popup 0.45s";
    jupiterinfo.style.opacity = "1";
    jupiterinfo.style.animation = "animation-popup 0.45s";
}

function makejupiterOFF(){
    jupiterTxT.style.opacity = "0";
    jupiterTxT.style.animation = "animation-pooff 0.8s";
    jupiterinfo.style.opacity = "0";
    jupiterinfo.style.animation = "animation-pooff 0.45s";
}


const SaturnTxT = document.getElementById('saturn-text');
const Saturninfo = document.getElementById('saturn-info');


function makeSaturnOP(){
    SaturnTxT.style.opacity = "1";
    SaturnTxT.style.animation = "animation-popup 0.45s";
    Saturninfo.style.opacity = "1";
    Saturninfo.style.animation = "animation-popup 0.45s";
}

function makeSaturnOFF(){
    SaturnTxT.style.opacity = "0";
    SaturnTxT.style.animation = "animation-pooff 0.8s";
    Saturninfo.style.opacity = "0";
    Saturninfo.style.animation = "animation-pooff 0.45s";
}



const uranusTxT = document.getElementById('uranus-text');
const uranusinfo = document.getElementById('uranus-info');


function makeuranusOP(){
    uranusTxT.style.opacity = "1";
    uranusTxT.style.animation = "animation-popup 0.45s";
    uranusinfo.style.opacity = "1";
    uranusinfo.style.animation = "animation-popup 0.45s";
}

function makeuranusOFF(){
    uranusTxT.style.opacity = "0";
    uranusTxT.style.animation = "animation-pooff 0.8s";
    uranusinfo.style.opacity = "0";
    uranusinfo.style.animation = "animation-pooff 0.45s";
}


const neptuneTxT = document.getElementById('neptune-text');
const neptuneinfo = document.getElementById('neptune-info');



function makeneptuneOP(){
    neptuneTxT.style.opacity = "1";
    neptuneTxT.style.animation = "animation-popup 0.45s";
    neptuneinfo.style.opacity = "1";
    neptuneinfo.style.animation = "animation-popup 0.45s";
}

function makeneptuneOFF(){
    neptuneTxT.style.opacity = "0";
    neptuneTxT.style.animation = "animation-pooff 0.8s";
    neptuneinfo.style.opacity = "0";
    neptuneinfo.style.animation = "animation-pooff 0.45s";
}

const Merc_page = document.getElementById('Merc-page');

function ONpage1(){
    Merc_page.style.opacity = "1";
    Merc_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage1(){
    Merc_page.style.opacity = "0";
    hidemercuryInfo();
    k_mercury = 1;
    Merc_page.style.pointerEvents = "none";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

const Nept_page = document.getElementById('Neptune-page');

function ONpage2(){
    Nept_page.style.opacity = "1";
    Nept_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage2(){
    Nept_page.style.opacity = "0";
    hideneptuneInfo();
    k_neptune = 1;
    Nept_page.style.pointerEvents = "none";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
}


const Uran_page = document.getElementById('uranus-page');

function ONpage3(){
    Uran_page.style.opacity = "1";
    Uran_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage3(){
    Uran_page.style.opacity = "0";
    Uran_page.style.pointerEvents = "none";
    hideUranusInfo();
    k_uranus = 1;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}


const satu_page = document.getElementById('saturn-page');

function ONpage4(){
    satu_page.style.opacity = "1";
    satu_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage4(){
    satu_page.style.opacity = "0";
    satu_page.style.pointerEvents = "none";
    hidesaturnInfo();
    k_saturn = 1;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}



const jupi_page = document.getElementById('jupiter-page');

function ONpage5(){
    jupi_page.style.opacity = "1";
    jupi_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage5(){
    jupi_page.style.opacity = "0";
    jupi_page.style.pointerEvents = "none";
    k_jupiter = 1;
    hidejupiterInfo();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}





const mars_page = document.getElementById('mars-page');

function ONpage6(){
    mars_page.style.opacity = "1";
    mars_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage6(){
    mars_page.style.opacity = "0";
    mars_page.style.pointerEvents = "none";
    hidemarsInfo();
    k_mars = 1;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}


const earth_page = document.getElementById('earth-page');

function ONpage7(){
    earth_page.style.opacity = "1";
    earth_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage7(){
    earth_page.style.opacity = "0";
    earth_page.style.pointerEvents = "none";
    k_earth = 1;
    hideearthInfo();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}





const venus_page = document.getElementById('venus-page');

function ONpage8(){
    venus_page.style.opacity = "1";
    venus_page.style.pointerEvents = "all";
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}

function OFFpage8(){
    venus_page.style.opacity = "0";
    venus_page.style.pointerEvents = "none";
    hidevenusInfo();
    k_venus = 1;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

}



//ANIMATION JS 


const mercBox = document.getElementById('mercury-box');
const venBox = document.getElementById('venus-box');
const EarthBox = document.getElementById('earth-box');
const marsBox = document.getElementById('mars-box');
const JupBox = document.getElementById('jupiter-box');
const SaturnBox = document.getElementById('saturn-box');
const UranusBox = document.getElementById('uranus-box');
const NeptuneBox = document.getElementById('neptune-box');

const planetAnimation = [mercBox,venBox,EarthBox,
    marsBox,JupBox,SaturnBox,UranusBox,NeptuneBox];

    playAnimations();

function playAnimations(){
    var randNum =  Math.floor(Math.random() * 8);
    console.log(randNum)
    planetAnimation[randNum].style.animation = "go_around-self 2s linear";
    
    var randNum2 = randNum;
    while(randNum2 == randNum){
        randNum2 =  Math.floor(Math.random() * 8);
    }
    planetAnimation[randNum2].style.animation = "go_around 2s linear";

}










//EXTRA INFO JS







const uranus_extra_info = document.getElementById('uranus-extra-info');
var k_uranus = 1;
function chooseUranus(){
    if(k_uranus == 1){
        showUranusInfo();
        k_uranus = 0;
    }else if(k_uranus == 0){
        hideUranusInfo();
        k_uranus = 1;
    }
}

function showUranusInfo(){
    uranus_extra_info.style.opacity = "1";
    uranus_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hideUranusInfo(){
    uranus_extra_info.style.opacity = "0";
    uranus_extra_info.style.animation = "makesmaller 0.6s forwards";
}





const neptune_extra_info = document.getElementById('neptune-extra-info');





var k_neptune = 1;
function chooseneptune(){
    if(k_neptune == 1){
        showneptuneInfo();
        k_neptune = 0;
    }else if(k_neptune == 0){
        hideneptuneInfo();
        k_neptune = 1;
    }
}

function showneptuneInfo(){
    neptune_extra_info.style.opacity = "1";
    neptune_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hideneptuneInfo(){
    neptune_extra_info.style.opacity = "0";
    neptune_extra_info.style.animation = "makesmaller 0.6s forwards";
}





const saturn_extra_info = document.getElementById('saturn-extra-info');





var k_saturn = 1;
function choosesaturn(){
    if(k_saturn == 1){
        showsaturnInfo();
        k_saturn = 0;
    }else if(k_saturn == 0){
        hidesaturnInfo();
        k_saturn = 1;
    }
}

function showsaturnInfo(){
    saturn_extra_info.style.opacity = "1";
    saturn_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hidesaturnInfo(){
    saturn_extra_info.style.opacity = "0";
    saturn_extra_info.style.animation = "makesmaller 0.6s forwards";
}



const jupiter_extra_info = document.getElementById('jupiter-extra-info');





var k_jupiter = 1;
function choosejupiter(){
    if(k_jupiter == 1){
        showjupiterInfo();
        k_jupiter = 0;
    }else if(k_jupiter == 0){
        hidejupiterInfo();
        k_jupiter = 1;
    }
}

function showjupiterInfo(){
    jupiter_extra_info.style.opacity = "1";
    jupiter_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hidejupiterInfo(){
    jupiter_extra_info.style.opacity = "0";
    jupiter_extra_info.style.animation = "makesmaller 0.6s forwards";
}



const mars_extra_info = document.getElementById('mars-extra-info');





var k_mars = 1;
function choosemars(){
    if(k_mars == 1){
        showmarsInfo();
        k_mars = 0;
    }else if(k_mars == 0){
        hidemarsInfo();
        k_mars = 1;
    }
}

function showmarsInfo(){
    mars_extra_info.style.opacity = "1";
    mars_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hidemarsInfo(){
    mars_extra_info.style.opacity = "0";
    mars_extra_info.style.animation = "makesmaller 0.6s forwards";
}


const earth_extra_info = document.getElementById('earth-extra-info');





var k_earth = 1;
function chooseearth(){
    if(k_earth == 1){
        showearthInfo();
        k_earth = 0;
    }else if(k_earth == 0){
        hideearthInfo();
        k_earth = 1;
    }
}

function showearthInfo(){
    earth_extra_info.style.opacity = "1";
    earth_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hideearthInfo(){
    earth_extra_info.style.opacity = "0";
    earth_extra_info.style.animation = "makesmaller 0.6s forwards";
}





const mercury_extra_info = document.getElementById('mercury-extra-info');





var k_mercury = 1;
function choosemercury(){
    if(k_mercury == 1){
        showmercuryInfo();
        k_mercury = 0;
    }else if(k_mercury == 0){
        hidemercuryInfo();
        k_mercury = 1;
    }
}

function showmercuryInfo(){
    mercury_extra_info.style.opacity = "1";
    mercury_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hidemercuryInfo(){
    mercury_extra_info.style.opacity = "0";
    mercury_extra_info.style.animation = "makesmaller 0.6s forwards";
}




const venus_extra_info = document.getElementById('venus-extra-info');





var k_venus = 1;
function choosevenus(){
    if(k_venus == 1){
        showvenusInfo();
        k_venus = 0;
    }else if(k_venus == 0){
        hidevenusInfo();
        k_venus = 1;
    }
}

function showvenusInfo(){
    venus_extra_info.style.opacity = "1";
    venus_extra_info.style.animation = "makebikerz 0.6s forwards";
}

function hidevenusInfo(){
    venus_extra_info.style.opacity = "0";
    venus_extra_info.style.animation = "makesmaller 0.6s forwards";
}
