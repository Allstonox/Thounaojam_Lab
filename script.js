//code for hamburger menu toggle

const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigationLinks = document.querySelector("nav");

hamburgerMenu.addEventListener("click", () => {
    navigationLinks.classList.toggle("active");
});

//code for fetching products from JSON and implementing in Products grid

// window.addEventListener("DOMContentLoaded", function () {
//     let products = productsList;
//     let displayProducts = products.Products.map(function(item) {
//         console.log(item);
//         return `<h1>${item.name}</h1>`;
//     });
//     displayProducts = displayProducts.join("");
//     productsSection.innerHTML = displayProducts;
//     console.log(displayProducts);
// });

const peopleGrid = document.querySelector(".people-grid");

function getPeople() {
    fetch("people.json")
        .then(response => response.json())
        .then(data => defineList(data));
}

function defineList(data) {
    let peopleData = data;
    let displayPeople = peopleData.People.map(function (item) {
        console.log(item);
        return `<div class="grid-item">
            <img src="${item.img}" alt="">
            <div class="person-info">
                <h1 class="name">${item.name}</h1>
                <h2 class="title">${item.title}</h2>
                <button>Learn More</button>
            </div>
    </div>`;
    });
    displayPeople = displayPeople.join("");
    peopleGrid.innerHTML = displayPeople;
    console.log(displayPeople);
}

getPeople();
