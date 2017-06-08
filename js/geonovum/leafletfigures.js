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
          
          console.log(image.width, image.height);
          
          var map = L.map(div, {
            maxZoom: 8,
            minZoom: -8,
            crs: L.CRS.Simple
          }).setView([image.height/2, image.width/2], 0);
          
          var imageUrl = image.src;
          
          var imageBounds = [
            [0, 0],
            [image.height, image.width],
          ];
          
          L.imageOverlay(imageUrl, imageBounds).addTo(map);
          
          //map.fitBounds(imageBounds);
        });
      cb();
    }};
  });
