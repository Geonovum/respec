define(["geonovum/deps/leaflet"], function(L) {
  /**
   * Makes figures scalable via zoom and pan function
   *
   */
  "use strict";
  return {
    run: function(conf, doc, cb) {
      doc.respecIsReady.then(function() {
        Array.from(
          doc.querySelectorAll("figure.scalable img")
        ).forEach(function(image) {
          var container = image.parentElement;
          var div = doc.createElement("div");
          div.id = "leaflet-figure";
          container.replaceChild(div, image);
          var map = L.map(div, {
            maxZoom: 8,
            minZoom: -8,
            center: [0, 0],
            crs: L.CRS.Simple,
          }).setView([image.height / 2, image.width / 2], 0);
          var imageBounds = [[0, 0], [image.height, image.width]];
          L.imageOverlay(image.src, imageBounds).addTo(map);
        });
      });
      cb();
    },
  };
});
