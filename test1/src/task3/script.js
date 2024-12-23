
const journeys = [
    {
        username: "Иван",
        location: "Дубай",
        cost: 20000,
        culturalHeritage: "Крепость Аль-Фахиди",
        easeOfTravel: "Легко",
        imageURL: "https://img.freepik.com/free-photo/aerial-view-downtown-dubai-autumn-day-united-arab-emirates_231208-7633.jpg"
    },
    {
        username: "Пётр",
        location: "Пекин",
        imageURL: "https://img.freepik.com/free-photo/great-wall-china-sunrise-badaling-near-beijing_53876-47055.jpg?t=st=1734900073~exp=1734903673~hmac=47de06c54eb82b4e967acadeb2e7390851cdf3242c859ee1462faa6b38d6880f&w=740",
        cost: 35000,
        culturalHeritage: "Великая Китайская стена",
        easeOfTravel: "Нормально"
    },
    {
        username: "Елизавета",
        location: "Санкт-Петербург",
        imageURL: "https://img.freepik.com/free-photo/view-st-petersburg-academy-arts_1398-2917.jpg",
        cost: 13000,
        culturalHeritage: "Эрмитаж",
        easeOfTravel: "Легко"
    },
];

let currentUser = null;

function displayJourneys() {
    const journeyList = document.getElementById("journeyList");
    journeyList.innerHTML = "";
    journeyList.style.display = "block";

    journeys.forEach((journey) => {
        const journeyDiv = document.createElement("div");

        const usernameElement = document.createElement("p");
        usernameElement.textContent = "Имя: " + journey.username;

        const locationElement = document.createElement("p");
        locationElement.textContent = "Локация: " + journey.location;

        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", journey.imageURL);
        imageElement.setAttribute("alt", "Places Image");

        const costElement = document.createElement("p");
        costElement.textContent = "Стоимость: " + journey.cost;

        const culturalHeritageElement = document.createElement("p");
        culturalHeritageElement.textContent = "Места культурного наследия: " + journey.culturalHeritage;

        const easeOfTravelElement = document.createElement("p");
        easeOfTravelElement.textContent = "Простота путешествия: " + journey.easeOfTravel;

        journeyDiv.appendChild(usernameElement);
        journeyDiv.appendChild(locationElement);
        journeyDiv.appendChild(costElement);
        journeyDiv.appendChild(culturalHeritageElement);
        journeyDiv.appendChild(easeOfTravelElement);
        journeyDiv.appendChild(imageElement);

        journeyList.appendChild(journeyDiv);

        journeyDiv.style.color = 'white';
        journeyDiv.style.fontSize = '20px';
        journeyDiv.style.lineHeight = '13px';
    });
}

function createUser() {
    const username = prompt("Введите свое имя:");
    if (username) {
        currentUser = username;
        alert(`Пользователь ${currentUser} создан.`);
    }
}

function recordJourney() {
    if (currentUser) {
        document.getElementById("journeyForm").style.display = "block";
    } else {
        alert("Сначала создайте пользователя.");
    }
}

document.getElementById("createUserBtn").addEventListener("click", createUser);

document.getElementById("recordJourneyBtn").addEventListener("click", recordJourney);

document.getElementById("viewJourneysBtn").addEventListener("click", displayJourneys);

document.getElementById("journeyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    if (!currentUser) {
        alert("Сначала создайте пользователя.");
        return;
    }

    const location = document.getElementById("location").value;
    const imageURL = document.getElementById("imageURL").value;
    const cost = document.getElementById("cost").value;
    const culturalHeritage = document.getElementById("culturalHeritage").value;
    const easeOfTravel = document.getElementById("easeOfTravel").value;


    const newJourney = {
        username: currentUser,
        location: location,
        imageURL: imageURL,
        cost: cost,
        culturalHeritage: culturalHeritage,
        easeOfTravel: easeOfTravel
    };

    journeys.push(newJourney);

    displayJourneys();

    event.target.reset();
});

