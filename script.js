  let lati = 0;
  let longi = 0;
  let cityName = '';

  function fetchLocation() {
    cityName = document.querySelector(".city");
    let api = "https://api.openweathermap.org/data/2.5/weather?q=";
    let units = "&units=metric&APPID=a3c1886f5eb76ddfb52f47c56366e0e3"
    let url;
    url = api + cityName.value + units;
    if (cityName != '') {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          lati = data.coord.lat;
          longi = data.coord.lon;
          initMap();
        })
        .catch(err => console.log(err));
    }
  }

  function initMap() {
    let zoom = document.querySelector('.zoom');
    let button = document.querySelector('.button');
    let inputs = document.querySelectorAll('input');
    let zoomVal = 4;

    function enter() {
      event.preventDefault();
      if (event.keyCode === 13) {
        fetchLocation();
      }
    }

    button.addEventListener('click', fetchLocation);
    inputs.forEach(item => item.addEventListener("keyup", enter));

    var uluru = {
      lat: Number(lati),
      lng: Number(longi)
    };

    var map = new google.maps.Map(document.querySelector('.map'), {
      zoom: Number(zoom.value),
      center: uluru
    });

    var contentString = `<h3>${cityName.value}</h3>`;

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  }
