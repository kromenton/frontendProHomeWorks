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

