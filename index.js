const selectorNewsBox1 = document.getElementById('selectorNewsBox1');
const selectorNewsBox2 = document.getElementById('selectorNewsBox2');
const selectorNewsBox3 = document.getElementById('selectorNewsBox3');
const selectorNewsBox4 = document.getElementById('selectorNewsBox4');
const selectorNewsBox5 = document.getElementById('selectorNewsBox5');
const selectorNewsBox = document.querySelectorAll('.selectorNewsBox');
const selectNewsBox = document.getElementById('selectNewsBox');
const newsBox = document.querySelector('.newsBox');
const timer = document.getElementById('timer');
const homeTeam = document.getElementById('homeTeam');
const awayTeam = document.getElementById('awayTeam');

let oraMeci = 21;
let minutulMeci = 30;
let secundaMeci = 0;
let timerActiv;

let Timer = () => {
    const currentData = new Date();
    let oraTimer = oraMeci - currentData.getHours();
    let minutulTimer = minutulMeci - currentData.getMinutes();
    let secundaTimer = secundaMeci - currentData.getSeconds();

    if (secundaTimer < 0) {
        minutulTimer -= 1;
        secundaTimer += 60;
    }

    if (minutulTimer < 0) {
        oraTimer -= 1;
        minutulTimer += 60;
    }

    return { oraTimer, minutulTimer, secundaTimer };
}

const ChangeBoxColor = () => {
    selectorNewsBox.forEach((box) => {
        box.style.fill = 'white';
    })
}


const defaultPage = () => {
    ChangeBoxColor();
    selectorNewsBox1.style.fill = 'black';
};
defaultPage();

const page1 = () => {
    homeTeam.style.opacity = 0;
    awayTeam.style.opacity = 0;
    timer.innerHTML = ' ';
    setTimeout(() => {
    setTimeout(() =>{  
        timerActiv = setInterval(() => {
            const { oraTimer, minutulTimer, secundaTimer } = Timer();
            if (oraTimer != 0 || minutulTimer != 0 || secundaTimer != 0) {
                timer.innerHTML = `${oraTimer} : ${minutulTimer} : ${secundaTimer}`;
            }
        }, 100);
        homeTeam.src="Home/IconCFR.png";
        awayTeam.src="Home/IconFCSB.png";
        homeTeam.style.opacity = 1;
        awayTeam.style.opacity = 1;
        }, 500);
    newsBox.style.backgroundImage = "url('Home/CFRvFCSBjpg.jpg')";
    newsBox.style.gap = "150px";  
    homeTeam.style.marginLeft= "150px";  
    }, 500);
}

const page2 = () =>{
    clearInterval(timerActiv);
    homeTeam.style.opacity = 0;
    awayTeam.style.opacity = 0;
    setTimeout(()=> {
    timer.innerHTML = "2 - 1";
    setTimeout(() =>{  
        homeTeam.src="Home/IconADANA.png";
        awayTeam.src="Home/IconCFR.png";
        homeTeam.style.opacity = 1;
        awayTeam.style.opacity = 1;
        }, 500);
    newsBox.style.backgroundImage = "url('Home/ADANAvCFR.jpg')";
    homeTeam.style.marginLeft= "-40px";
    newsBox.style.gap = "220px";  
    }, 500);
}

const page3 = () =>{
    clearInterval(timerActiv);
    homeTeam.style.opacity = 0;
    awayTeam.style.opacity = 0;
    setTimeout(()=> {
    timer.innerHTML = "1 - 1";
    setTimeout(() =>{  
        homeTeam.src="Home/IconCSU.png";
        awayTeam.src="Home/IconCFR.png";
        homeTeam.style.opacity = 1;
        awayTeam.style.opacity = 1;
        }, 500);
    newsBox.style.backgroundImage = "url('Home/CFRvCSU.jpg')";
    homeTeam.style.marginLeft= "220px"; 
    newsBox.style.gap = "210px"; 
    }, 500);
}

const page4 = () =>{
    clearInterval(timerActiv);
    homeTeam.style.opacity = 0;
    awayTeam.style.opacity = 0;
    setTimeout(()=> {
    timer.innerHTML = "1 - 1";
    setTimeout(() =>{  
        homeTeam.src="Home/IconCFR.png";
        awayTeam.src="Home/IconAdana.png";
        homeTeam.style.opacity = 1;
        awayTeam.style.opacity = 1;
        }, 500);
    newsBox.style.backgroundImage = "url('Home/ADANAvCFR.png')";
    homeTeam.style.marginLeft= "-40px"; 
    newsBox.style.gap = "450px"; 
    }, 500);
}

selectorNewsBox1.addEventListener('click', () => {
    if (selectorNewsBox1.style.fill === 'white'){
        page1();
    }
    defaultPage();
});
selectorNewsBox2.addEventListener('click', () => {
    if (selectorNewsBox2.style.fill === 'white'){
        page2();
    }
    ChangeBoxColor();
    selectorNewsBox2.style.fill = 'black';
});
selectorNewsBox3.addEventListener('click', () => {
    if (selectorNewsBox3.style.fill === 'white'){
        page3();
    }
    ChangeBoxColor();
    selectorNewsBox3.style.fill = 'black';
});
selectorNewsBox4.addEventListener('click', () => {
    if (selectorNewsBox4.style.fill === 'white'){
        page4();
    }
    ChangeBoxColor();
    selectorNewsBox4.style.fill = 'black';
});
selectorNewsBox5.addEventListener('click', () => {
    if (selectorNewsBox5.style.fill === 'white'){
        page5();
    }
    ChangeBoxColor();
    selectorNewsBox5.style.fill = 'black';
});

timerActiv = setInterval(() => {
    const { oraTimer, minutulTimer, secundaTimer } = Timer();
    if (oraTimer != 0 || minutulTimer != 0 || secundaTimer != 0) {
        timer.innerHTML = `${oraTimer} : ${minutulTimer} : ${secundaTimer}`;
    }
}, 100);





