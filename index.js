const selectorNewsBox1 = document.getElementById('selectorNewsBox1');
const selectorNewsBox2 = document.getElementById('selectorNewsBox2');
const selectorNewsBox3 = document.getElementById('selectorNewsBox3');
const selectorNewsBox4 = document.getElementById('selectorNewsBox4');
const selectorNewsBox5 = document.getElementById('selectorNewsBox5');
const selectorNewsBox = document.querySelectorAll('.selectorNewsBox');

const ChangeBoxColor = () => {
    selectorNewsBox.forEach((box) => {
        box.style.fill = 'white';
    })
}

selectorNewsBox1.addEventListener(`click`, () => {
    ChangeBoxColor();
    selectorNewsBox1.style.fill = `black`;
});
selectorNewsBox2.addEventListener(`click`, () => {
    ChangeBoxColor();
    selectorNewsBox2.style.fill = `black`;
});
selectorNewsBox3.addEventListener(`click`, () => {
    ChangeBoxColor();
    selectorNewsBox3.style.fill = `black`;
});
selectorNewsBox4.addEventListener(`click`, () => {
    ChangeBoxColor();
    selectorNewsBox4.style.fill = `black`;
});
selectorNewsBox5.addEventListener(`click`, () => {
    ChangeBoxColor();
    selectorNewsBox5.style.fill = `black`;
});