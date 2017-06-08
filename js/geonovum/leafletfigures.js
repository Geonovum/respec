define(
  ["geonovum/deps/leaflet",],
  function(L){
  /**
   * Makes figures scalable via zoom and pan function
   *
   */
  "use strict";
  return {
    run: function(conf, doc, cb) {
      Array
        .from(doc.querySelectorAll("figure.scalable img"))
        .forEach(function(image) { 
          var container = image.parentElement;
          var div = document.createElement("div");
          div.id = "leaflet-figure";
          container.replaceChild(div, image);
          
          var map = L.map(div, {
            maxZoom: 8,
            minZoom: -8,
            center: [0, 0],
            crs: L.CRS.Simple
          }).setView([image.height/2, image.width/2], 0);
         
          //var map = L.map(div, {
          //  minZoom: 1,
          //  maxZoom: 4,
          //  //center: [0, 0],
          //  zoom: 2,
          //  crs: L.CRS.Simple
          //});
          
          var imageBounds = [
            [0, 0],
            [image.height, image.width],
          ];
          
          //var northEast = map.unproject([image.height, image.width], map.getMaxZoom()-1);
          //var southWest = map.unproject([0, 0], map.getMaxZoom()-1);
          //var imageBounds = new L.LatLngBounds(southWest, northEast);
          
          L.imageOverlay(image.src, imageBounds).addTo(map);
          //map.fitBounds(imageBounds);
        });
      cb();
    }};
  });
