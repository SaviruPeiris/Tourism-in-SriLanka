
// font change and color change

const select = document.getElementById('color-select');
const fontDecrease = document.getElementById('font-decrease');
const fontSize = document.getElementById('font-size');
const fontIncrease = document.getElementById('font-increase');

const colors = {
    default: {bg: 'white', text: 'black'},
    yellow: {bg: 'yellow', text: 'white'},
    green: {bg: 'green', text: 'white'}
};

select.addEventListener('change', () => {
    const value = select.value;
    if (value === 'random') {
        document.body.style.backgroundColor = getRandomColor();
        document.body.style.color = getRandomColor();
    } else {
        document.body.style.backgroundColor = colors[value].bg;
        document.body.style.color = colors[value].text;
    }
});

fontDecrease.addEventListener('click', () => {
    const currentFontSize = parseInt(fontSize.value);
    if (currentFontSize > 10) {
        fontSize.value = currentFontSize - 1;
        document.body.style.fontSize = `${fontSize.value}px`;
    }
});

fontIncrease.addEventListener('click', () => {
    const currentFontSize = parseInt(fontSize.value);
    if (currentFontSize < 50) {
        fontSize.value = currentFontSize + 1;
        document.body.style.fontSize = `${fontSize.value}px`;
    }
});

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


