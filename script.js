
function initMap() {
  let lati = document.querySelector('.lat');
  let longi = document.querySelector('.lon');
  let zoom = document.querySelector('.zoom');
  let button = document.querySelector('.button');
  let inputs = document.querySelectorAll('input');
  let latVal = 0;
  let lonVal = 0;
  let zoomVal = 4;

   function enter(){
     event.preventDefault();
        if (event.keyCode === 13) {
        initMap();
   }
 }

  button.addEventListener('click',initMap);
  inputs.forEach(item => item.addEventListener("keyup", enter));

  var uluru = {
    lat: Number(lati.value),
    lng: Number(longi.value)
  };

  var map = new google.maps.Map(document.querySelector('.map'), {
    zoom: Number(zoom.value),
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

}
