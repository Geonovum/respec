define(
  ["geonovum/deps/leaflet",],
  function(L){
  /**
   * Makes figures scalable via zoom and pan function
   *
   */
  return {
    run: function(conf, doc, cb) {
      Array
        .from(doc.querySelectorAll("figure.scalable img"))
        .forEach(function(image) {
          var imgDimensions = {width:image.width, height:image.height};
          
          container = image.parentElement;
          div = document.createElement("div");
          div.id = "leaflet-figure";
          container.insertBefore(div, image);
          
          var map = L.map(div, {
            maxZoom: 8,
            minZoom: -8,
            crs: L.CRS.Simple
          }).setView([imgDimensions.height/2, imgDimensions.width/2], -1);
          
          var imageUrl = image.src;
          
          var imageBounds = [
            [imgDimensions.width , 0],
            [0, imgDimensions.height]
          ];
          
          L.imageOverlay(imageUrl, imageBounds).addTo(map);
          
          image.remove();
        });
      cb();
    }};
  }); 