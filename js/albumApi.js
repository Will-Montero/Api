const api = "https://jsonplaceholder.typicode.com/photos";


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

  const fillData = (jsonData) => {
    //crear los 10 cards con los datos de los 10 usuarios que estan dentro de jsonData
    let htmlCards = "";
    // Ciclo repetitivo

     for (let i = 0; i <  20; i++) {
      htmlCards += '<div class="col">';
      htmlCards += '<div class="card">';
      htmlCards += `<img src="${jsonData[i].url}" class="card-img-top" alt="..."></img>`
      htmlCards += '<div class="card-body">';
      htmlCards += `<h5 class="card-title">${jsonData[i].title}</h5>`; //interpolación = colocar el+ nombre de una variable
      htmlCards += "</div>";
      htmlCards += "</div>";
      htmlCards += "</div>";
    };
    document.getElementById("cardsFromApi").innerHTML = htmlCards;
  };

  getData(api);