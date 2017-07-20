define(
  ["geonovum/deps/leaflet", "geonovum/deps/easy-button", "geonovum/deps/proj4", "geonovum/deps/proj4leaflet"],
  function(L, easyButton, proj4, proj4L) {
    /**
      * Add maps to ReSpec
      *
      */
    "use strict";
    return {
      run: function(conf, doc, cb) {
        doc.respecIsReady.then(function() {
          Array.from(doc.querySelectorAll("div.map-canvas")).forEach(function(map) {
            
            var EPSG28992 = new L.Proj.CRS('EPSG:28992',
                                           '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079' +
                                           'x_0=155000 +y_0=463000 +ellps=bessel +units=m' +
                                           'towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs',
                {
                    resolutions: [3440.640, 1720.320, 860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420],
                    bounds: L.bounds([-285401.92, 22598.08], [595401.9199999999, 903401.9199999999]),
                    origin: [-285401.92, 22598.08]
                }
            );
            var map = new L.Map(map, {
                crs: EPSG28992,
                continuousWorld: true,
                worldCopyJump: false
            });
            map.attributionControl.setPrefix('');
            new L.TileLayer('http://geodata.nationaalgeoregister.nl/tms/1.0.0/brtachtergrondkaart/{z}/{x}/{y}.png', {
                minZoom: 0,
                maxZoom: 13,
                enter: [155000, 463000],
                tms: true,
                attribution: 'Map data: <a href="http://www.kadaster.nl">Kadaster</a>',
                errorTileUrl: 'http://www.webmapper.net/theme/img/missing-tile.png', // plaatje als tegels niet worden gevonden...
            }).addTo(map);
 
            //var mymap = L.map(map).setView([52.152473, 5.372038], 13);
            //L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            //    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            //    maxZoom: 18,
            //    id: 'mapbox.streets'
            //}).addTo(mymap);
            //var marker = L.marker([52.152473, 5.372038]).addTo(mymap);
            //var circle = L.circle([52.152473, 5.372038], {
            //    color: 'red',
            //    fillColor: '#f03',
            //    fillOpacity: 0.5,
            //    radius: 500
            //}).addTo(mymap);;
          });
        });
        cb();
      },
    };
  }
);
