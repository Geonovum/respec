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
          var width = image.width,
            height = image.height;
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
          
          var reset_button = d3.select(image.parentElement)
            .insert("button", ":nth-child(2)")
            .attr("id", "reset_button")
            .attr("class", "button")
            .text("Reset");
          reset_button.on("click", function () {
                                     svg.transition()
                                       .duration(750)
                                       .call(zoom.transform, 
                                        d3.zoomIdentity);
                                   });
          
          //var enlarge_button = d3.select(image.parentElement)
          //  .insert("button", ":nth-child(2)")
          //  .attr("id", "enlarge_button")
          //  .attr("class", "button")
          //  .text("Enlarge");
          //enlarge_button.on("click", openNewTab(image.src));
          
          image.remove();
          
          //function openNewTab(url) {
          //  var win = window.open(url, '_blank');
          //  win.focus();
          //}
        });
      cb();
    }};
  });       
