define(
  ["geonovum/deps/d3",
   "core/pubsubhub"],
  function(d3, pubsubhub){
  /**
   * Makes figures scalable via zoom and pan function
   *
   */
  return {
    run: function(conf, doc, cb) {
      var figures = $("figure.scalable");
      
      for (i = 0; i < figures.length; i++) {
        var width, height, src;
        var img = figures[i].getElementsByTagName("img")[0];
        
        /* Get and/or set image height */
        if (img.getAttribute("height")) {
          height = img.getAttribute("height");
        } else {
          height = 600;
          img.setAttribute("height", height);
        };
        
        /* Get and/or set image width */
        if (img.getAttribute("width")) {
          width = img.getAttribute("width");
        } else {
          width = "100%";
          img.setAttribute("width", width);
        };
        
        /* Check id */
        if (img.getAttribute("id")) {
          var id = img.getAttribute("id");
        };
        
        /* Check src */
        if (img.getAttribute("src")) {
          var src = img.getAttribute("src");
        };
        
        /* Check alt */
        if (img.getAttribute("alt")) {
          var alt = img.getAttribute("alt");
        }
        
        /* Create svg element */
        var node = document.createElement("svg")
        svg = img.parentElement.insertBefore(node, img)
        img.parentElement.removeChild(img)
        
        var svg = d3.select(svg).call(d3.zoom().on("zoom", function () {
                      svg.attr("transform", d3.event.transform)
                    }))
                    .attr("width", width)
                    .attr("height", height)
                    .style("border", "1px solid black")
                    .append("g");
        
        svg.append("img")
           .attr("src", src)
           .attr("id", id)
           .attr("alt", alt);
      };
      cb();
    }
  }; 
});
