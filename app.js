let clicker1 = document.querySelector("#geoEnter");

clicker1.addEventListener("click", () => {
  console.log("click");
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let address = "https://api.openweathermap.org/data/2.5/weather?lat=";
      let api = "lon=" + lon + 2;
      fetch(address + lat + "&" + api)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log(response.error);
          }
        })
        .then((data) => {
          console.log(data);
          const temp = data["main"].temp;
          document.getElementById("temperature").textContent = temp;
          const feel = data["main"].feels_like;
          document.getElementById("feels").textContent = feel;
          const place = data["name"];
          document.getElementById("places").textContent =
            place + ", " + data["sys"].country;
          const minTemp = data["main"].temp_min;
          document.getElementById("min").textContent = minTemp;
          const maxTemp = data["main"].temp_max;
          document.getElementById("max").textContent = maxTemp;
          const Humidty = data["main"].humidity;
          document.getElementById("hum").textContent = Humidty;
        });
    });
  } else {
    console.log("geolocation IS NOT available");
  }
});

let address = "https://api.openweathermap.org/data/2.5/weather?q=";
let api = "&appid=c61a0f7ded409d8b7e97cc7753c86d08";
let clicker = document.querySelector("#entButton");

clicker.addEventListener("click", () => {
  let place = document.querySelector("#inputter").value;
  if (!place) {
    place.value = "please add a city";
    return "Please add a city";
  }

  fetch(address + place + api + "&units=metric")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response.error);
      }
    })
    .then((data) => {
      console.log(data);
      const temp = data["main"].temp;
      document.getElementById("temperature").textContent = temp;
      const feel = data["main"].feels_like;
      document.getElementById("feels").textContent = feel;
      const place = data["name"];
      document.getElementById("places").textContent =
        place + ", " + data["sys"].country;
      const minTemp = data["main"].temp_min;
      document.getElementById("min").textContent = minTemp;
      const maxTemp = data["main"].temp_max;
      document.getElementById("max").textContent = maxTemp;
      const Humidty = data["main"].humidity;
      document.getElementById("hum").textContent = Humidty;
    });
});
