/*let birthYear = prompt("Введіть рік народження:");
let city = prompt("Введіть місто, де ви живете:");
let favoriteSport = prompt("Введіть ваш улюблений вид спорту:");

if (birthYear && city && favoriteSport) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    let message = "Твій вік: " + age + " років.\n";

    if (city === "Київ" || city === "Вашингтон" || city === "Лондон") {
        // Отримуємо країну за столицею
        let country = getCountryByCapital(city);
        message += "Ти живеш у столиці " + country + ".";
    } else {
        message += "Ти живеш у місті " + city + ".";
    }

    // Список вибраних видів спорту та чемпіонів
    let sportsChampions = {
        "футбол": "Ліонель Мессі",
        "баскетбол": "Леброн Джеймс",
        "теніс": "Серена Вільямс"
    };

    // Перевірка, чи введений вид спорту є в списку
    if (favoriteSport.toLowerCase() in sportsChampions) {
        let champion = sportsChampions[favoriteSport.toLowerCase()];
        message += "\nКруто! Хочеш стати " + champion + "?";
    }

    alert(message);
} else {
    alert("Шкода, що ви не захотіли ввести свій(ю) " + (!birthYear ? "рік народження" : (!city ? "місто" : "вид спорту")) + ".");
}

// Функція для отримання країни за столицею
function getCountryByCapital(capital) {
    // Ваша реалізація отримання країни за столицею
    // Наприклад, для прикладу повертаємо те саме місто
    return capital;
}*/

 /*2 вариант*/
let birthYear = prompt("Enter your birth year:");
let city = prompt("Enter the city you live in:");
let favoriteSport = prompt("Enter your favorite sport:");

if (birthYear && city && favoriteSport) {
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;

    let message = `Your age: ${age} years.\n`;

    let countryDisplay = {
        "Kyiv": "Ukraine",
        "Washington": "USA",
        "London": "United Kingdom"
    };

    let country = countryDisplay[city] || city;
    message += `You live in ${country}.`;

    let sportsChampions = {
        "football": "Lionel Messi",
        "basketball": "LeBron James",
        "tennis": "Serena Williams"
    };

    let champion = sportsChampions[favoriteSport] || favoriteSport;
    if (champion) {
        message += `\nAwesome! Do you want to be like ${champion}?`;
    } else {
        message += `\nYour favorite sport is ${favoriteSport}.`;
    }

    alert(message);
} else {
    let missingInfo = !birthYear ? "birth year" : (!city ? "city" : "favorite sport");
    alert(`Too bad you didn't want to enter your ${missingInfo}.`);
}

