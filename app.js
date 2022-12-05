let clicker1 = document.querySelector("#geoEnter");
let address = "https://api.openweathermap.org/data/2.5/weather?q=";
let api = "&appid=c61a0f7ded409d8b7e97cc7753c86d08";

let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

newdate = day + "/" + month + "/" + year;

document.getElementById("date").textContent = newdate;

clicker1.addEventListener("click", () => {
  console.log("click");
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let address = "https://api.openweathermap.org/data/2.5/weather?lat=";
      let api =
        "lon=" +
        lon +
        "&appid=c61a0f7ded409d8b7e97cc7753c86d08" +
        "&units=metric";
      fetch(address + lat + "&" + `${api}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log(response.error);
            return;
          }
        })
        .then((data) => {
          //Weather image
          let iconCode = data.weather[0].icon;
          document.getElementById(
            "iconurl"
          ).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
          //weather description
          const description = data.weather[0].description;
          document.getElementById("description").textContent =
            description.toUpperCase();
          //temperature
          const temp = data["main"].temp;
          document.getElementById("temperature").textContent =
            Math.round(temp) + "°";
          // feels like
          const feel = data["main"].feels_like;
          document.getElementById("feels").textContent =
            +Math.round(feel) + "°";
          //wind
          const windSpeed = data.wind.speed;
          document.getElementById("wind").textContent = windSpeed;
          //Humidty
          const Humidty = data["main"].humidity;
          document.getElementById("hum").textContent = Humidty + " %";
        });
    });
  } else {
    console.log("geolocation IS NOT available");
  }
});

let clicker = document.querySelector("#entButton");

clicker.addEventListener("click", () => {
  let place = document.querySelector("#inputter").value;
  if (!place) {
    return;
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
      let iconCode = data.weather[0].icon;
      document.getElementById(
        "iconurl"
      ).src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      //weather type
      const description = data.weather[0].description;
      document.getElementById("description").textContent =
        description.toUpperCase();
      //temperature
      const temp = data["main"].temp;
      document.getElementById("temperature").textContent =
        Math.round(temp) + "°";
      // feels like
      const feel = data["main"].feels_like;
      document.getElementById("feels").textContent = +Math.round(feel) + "°";
      //wind
      const windSpeed = data.wind.speed;
      document.getElementById("wind").textContent = windSpeed;
      //Humidty
      const Humidty = data["main"].humidity;
      document.getElementById("hum").textContent = Humidty + " %";
    });
});

// export default description;
