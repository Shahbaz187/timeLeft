const today = new Date();
const expireDate = new Date("1 augest 2032");

const startDate = new Date("1 augest 2024");
const diff = (expireDate - today) / 1000;
const totalDays = (expireDate - startDate) / 1000;

const daysLeft = Math.floor(diff / 3600 / 24 + 1);
const totalDaysleft = Math.floor(totalDays / 3600 / 24);

const redBox = totalDaysleft - daysLeft;
const greenBox = daysLeft;

for (let r = 0; r < redBox; r++) {
    const container = document.getElementById('container');
    const redBox = document.createElement('div');
    redBox.classList.add("red-box");
    redBox.innerHTML = '<h1>☠️</h1>';
    container.append(redBox)
}

for (let g = 0; g < greenBox; g++) {
    const container = document.getElementById('container');
    const greenBox = document.createElement('div');
    greenBox.classList.add("green-box");
    greenBox.innerHTML = '<h1>🧠</h1>';
    container.append(greenBox)
}