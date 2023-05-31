const api = "https://apisimpsons.fly.dev/api/personajes";
const btnApiUsers = document.getElementById("apiUsers");
const getData = (url) => {
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
       fillData(json);
    })
    .catch((error) => {
    console.log("error desde la api", error),
    alert("la api no está disponible")
    });
};

const fillData = (jsonData) => {

    let htmlCards = "";

    console.log(jsonData);

    jsonData.docs.forEach((e) => {
    htmlCards += '<div class="col">';
    htmlCards += '<div class="card">';
    htmlCards += '<div class="card-body">';
    htmlCards += `<h5 class="card-title">${e.Nombre}</h5>`;
    htmlCards += `<h5 class="card-title">${e.historia}</h5>`;
    htmlCards += `<img src="${e.Imagen}" class="card-img-top" alt="..."></img>`
    htmlCards += `<h5 class="card-title">${e.Genero}</h5>`;
    htmlCards += `<h5 class="card-title">${e.Estado}</h5>`;
    htmlCards += `<h5 class="card-title">${e.Ocupacion}</h5>`;
    htmlCards += "</div>";
    htmlCards += "</div>";
    htmlCards += "</div>";
    });
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
};

btnApiUsers.onclick = function () {
    getData(api);
};