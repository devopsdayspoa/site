var map;
var posicao = {lat: -30.079377, lng: -51.2192903};
function initMap() {
  map = new google.maps.Map(document.getElementById('mapa'), {
    center: posicao,
    zoom: 17,
    disableDefaultUI: true
  });
  var marker = new google.maps.Marker({
  position: posicao,
  map: map
  });
    map.setOptions({draggable: false, zoomControl: false, scrollwheel: false, disableDoubleClickZoom: true});
}


$(function() {
    $('.navbar').bind('click', 'ul li a', function(event) {
      event.preventDefault();
      $.scrollTo(event.target.hash, 1000);
    });
});

$('.navbar').on('activate.bs.scrollspy', function (event) {
  window.history.pushState("object or string", "Title", event.target.firstElementChild.hash);
})

$('#descricoes-palestras .collapse').on('show.bs.collapse', function () {
    $('.collapse.in').each(function(){
        $(this).collapse('hide');
    });
  });

  $('#programacao .collapse').on('shown.bs.collapse', function (event) {
    $.scrollTo('#programacao', 1000);
  })

  $('#programacao .nav').bind('click', 'a', function(event) {
    event.preventDefault();
  });
