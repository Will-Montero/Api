//URL de la api de usuarios

// function getData2 () {} //función igual de valida que la flechas

const api = "https://jsonplaceholder.typicode.com/users";
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
//Obtener la información de la API



const fillData = (jsonData) => {
  //crear los 10 cards con los datos de los 10 usuarios que estan dentro de jsonData
  let htmlCards = "";
  // Ciclo repetitivo
  console.log(jsonData);
  jsonData.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.name}</h5>`;
    htmlCards += `<h5 class="card-title">${e.email}</h5>`;
    htmlCards += `<h5 class="card-title">${e.address.city}</h5>`;
    htmlCards += `<h5 class="card-title">${e.phone}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
  });
  document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

//función flecha

//evento click
btnApiUsers.onclick = function () {
  getData(api);
};
