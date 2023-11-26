const citiesList = document.getElementById("cities-list");

const cities = ['Москва', 'Ростов-на-Дону', 'Анапа', 'Хабаровск'];
const temperatures = [];

for (let city of cities) {
    const inputTemp = prompt(`Введите температуру для города ${city}`);
    temperatures.push(inputTemp);
    const cityElement = document.createElement("li");
    cityElement.classList.add('items');
    cityElement.textContent = `Температура в городе ${city}: ${inputTemp} °С`;
    citiesList.append(cityElement);
}

let minimum = -Infinity;
let maximum = Infinity;

const minTemp = document.createElement("p");
const maxTemp = document.createElement("p");

for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    if (temp > minimum) {
    minimum = temp;
    }

    if (temp < maximum) {
    maximum = temp;
    }
minTemp.textContent = `Минимальная температура: ${maximum} °С`;
maxTemp.textContent = `Максимальная температура: ${minimum} °С`;
}


citiesList.after(minTemp);
citiesList.after(maxTemp);
