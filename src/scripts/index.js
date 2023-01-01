import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import DATA from "../DATA.json";
console.log(DATA);

const menu = document.querySelector("#menu");
const hero = document.querySelector(".hero");
const main = document.querySelector("main");
const drawer = document.querySelector("#drawer");

menu.addEventListener("click", function (event) {
  drawer.classList.toggle("open");
  event.stopPropagation();
});

hero.addEventListener("click", function () {
  drawer.classList.remove("open");
});

main.addEventListener("click", function () {
  drawer.classList.remove("open");
});

function getRestaurants(data) {
  let restoHTML = "";

  data.restaurants.forEach((resto, i) => {
    restoHTML += `
    <article class="post-item">
      <img class="post-item__thumbnail" src="${resto.pictureId}"
      alt="${resto.name}">
        <div class="post-item__content">
          <p class="post-item__date">${resto.rating}</p>
            <h1 class="post-item__title">${resto.name} - ${resto.city}</h1>
            <p class="post-item__description">${resto.description}</p>
        </div>
    </article>
      `;
  });

  // append to DOM
  document.getElementById("katalog-restaurant").innerHTML = restoHTML;
}

getRestaurants(DATA);
