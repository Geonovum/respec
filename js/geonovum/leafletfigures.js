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
          container.insertBefore(div, image);
          
          var map = L.map(div, {
            maxZoom: 8,
            minZoom: -8,
            crs: L.CRS.Simple
          }).setView([image.height/2, image.width/2], -1);
          
          var imageUrl = image.src;
          
          var imageBounds = [
            [image.width , 0],
            [0, image.height]
          ];
          
          L.imageOverlay(imageUrl, imageBounds).addTo(map);
          
          map.fitBounds(imageBounds);
          
          image.remove();
        });
      cb();
    }};
  });
