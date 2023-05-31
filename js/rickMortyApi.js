const api = "https://rickandmortyapi.com/api/character";
const btnApiUsers = document.getElementById("apiUsers");
const getData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("error desde la api", error),
        alert("la api no está disponible");
    });
};

//obtener info desde la api

const fillData = (jsonData) => {
  //traer 20 imágenes desde la api de rick
  let htmlCards = "";
  //ciclo repetitivo
  console.log(jsonData);
  jsonData.results.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-title">${e.species}</h5>`;
    htmlCards += `<h5 class="card-title">${e.gender}</h5>`;
    htmlCards += `<img src="${e.image}" class="card-img-top" alt="..."></img>`
    htmlCards += `<h5 class="card-title">${e.location.name}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

//evento click
btnApiUsers.onclick = function () {
  getData(api);
};
