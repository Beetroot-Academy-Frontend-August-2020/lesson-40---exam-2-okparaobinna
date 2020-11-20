
$('.card').slick({
    
    slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
   
});

  function creatMap() {
    const center = {
        lat: 40.5527859,
        lng: -74.1027019
     };
    const zoom = 13;
    const map = new google.maps.Map(document.querySelector('#map'), {
        center,
        zoom,
        
    });
  
    const marker = new google.maps.Marker({
        position:center,
        map: map,
    });
 }
