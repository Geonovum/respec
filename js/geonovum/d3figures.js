define(
  ["geonovum/deps/d3"],
  function(d3){
  /**
   * Makes figures scalable via zoom and pan function
   *
   */
  return {
    run: function(conf, doc, cb) {
      Array
        .from(doc.querySelectorAll("figure.scalable img"))
        .forEach(function(image) {
          var width = /*image.width;*/ image.getAttribute("width");
          var height = /*image.height;*/  image.getAttribute("height");
          var zoom = d3.zoom()
            .scaleExtent([1, 6])
            .on("zoom", function () {
                          g.attr("transform", 
                          d3.event.transform);
                        });
          
          var container = d3.select(image.parentElement)
          var svg = container.insert("svg", ":first-child")
            .attr("height", height)
            .attr("width", width)
            .attr("id", (image.id ? image.id : ""))
            .attr("alt", (image.alt ? image.alt : ""));
          var g = svg.append("g")
            .call(zoom)
            .append("g");
          g.append("image")
            .attr("height", height)
            .attr("width", width)
            .attr("src", image.src)
            .attr("xlink:href", image.src);
          
          image.remove();
        });
      cb();
    }};
  }); 