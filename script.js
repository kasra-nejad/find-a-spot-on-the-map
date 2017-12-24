function initMap(x,y) {
  let lati = document.querySelector('.lat');
  let longi = document.querySelector('.lon');
  let button = document.querySelector('.button');
  let latVal = 0;
  let lonVal = 0;

  function updateLocation(){
    latVal = Number(lati.value);
    lonVal = Number(longi.value);
    initMap(latVal,lonVal);
  }

  button.addEventListener('click',updateLocation);
  var uluru = {
    lat: x,
    lng: y
  };
  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}
