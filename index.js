const selectorNewsBox1 = document.getElementById('selectorNewsBox1');
const selectorNewsBox2 = document.getElementById('selectorNewsBox2');
const selectorNewsBox3 = document.getElementById('selectorNewsBox3');
const selectorNewsBox4 = document.getElementById('selectorNewsBox4');
const selectorNewsBox5 = document.getElementById('selectorNewsBox5');
const selectorNewsBox = document.querySelectorAll('.selectorNewsBox');
const timer = document.getElementById('timer');
let oraMeci = 21;
let minutulMeci = 30;
let secundaMeci = 0;

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

selectorNewsBox1.addEventListener('click', () => {
    ChangeBoxColor();
    selectorNewsBox1.style.fill = 'black';
});
selectorNewsBox2.addEventListener('click', () => {
    ChangeBoxColor();
    selectorNewsBox2.style.fill = 'black';
});
selectorNewsBox3.addEventListener('click', () => {
    ChangeBoxColor();
    selectorNewsBox3.style.fill = 'black';
});
selectorNewsBox4.addEventListener('click', () => {
    ChangeBoxColor();
    selectorNewsBox4.style.fill = 'black';
});
selectorNewsBox5.addEventListener('click', () => {
    ChangeBoxColor();
    selectorNewsBox5.style.fill = 'black';
});

setInterval(() => {
    const { oraTimer, minutulTimer, secundaTimer } = Timer();
    if (oraTimer != 0 || minutulTimer != 0 || secundaTimer != 0) {
        timer.innerHTML = `${oraTimer} : ${minutulTimer} : ${secundaTimer}`;
    }
}, 1000);
