const hamburgerIcon = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active'); 
    hamburgerIcon.classList.toggle('close');
    
    if (navMenu.classList.contains('active')) {
        hamburgerIcon.innerHTML = 'X'; 
    } else {
        hamburgerIcon.innerHTML = '&#9776;'; 
    }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Array of Temple Objects
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
];

// Function to create temple cards
function createTempleCards(filteredTemples) {
    const templeCardsContainer = document.getElementById("temple-cards");
    templeCardsContainer.innerHTML = ''; 

    filteredTemples.forEach(temple => {
        const card = document.createElement('figure');
        
        // Temple Name (Description above the image)
        const name = document.createElement('figcaption');
        name.textContent = temple.templeName;
        card.appendChild(name);

        // Temple Location
        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);

        // Temple Dedicated Date
        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);

        // Temple Area
        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area} sq ft`;
        card.appendChild(area);

        // Temple Image
        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} image`);
        img.setAttribute('loading', 'lazy');
        card.appendChild(img);

        templeCardsContainer.appendChild(card);
    });
}


function filterOld() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
}

function filterNew() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
}

function filterLarge() {
    return temples.filter(temple => temple.area > 90000);
}

function filterSmall() {
    return temples.filter(temple => temple.area < 10000);
}

// Set up navigation filters
document.getElementById("home").addEventListener('click', () => createTempleCards(temples));
document.getElementById("old").addEventListener('click', () => createTempleCards(filterOld()));
document.getElementById("new").addEventListener('click', () => createTempleCards(filterNew()));
document.getElementById("large").addEventListener('click', () => createTempleCards(filterLarge()));
document.getElementById("small").addEventListener('click', () => createTempleCards(filterSmall()));

createTempleCards(temples);

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
