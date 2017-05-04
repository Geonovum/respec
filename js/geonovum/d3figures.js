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
       Array
        .from(doc.querySelectorAll("figure.scalable img"))
        .forEach(function(image){
          svg = d3.select(image.parentElement)
                  .insert("svg", ":first-child")
                  .attr("width", ((image.getAttribute("width")) ? image.getAttribute("width") : "100%"))
                  .attr("height", ((image.getAttribute("height")) ? image.getAttribute("height") : 600))
                  .style("border", "1px solid black");
          g = svg.append("g")
                 .attr("transform", "translate([-0, 0])scale(1)")
                 .call(d3.zoom()
                   .scaleExtent([1, 6])
                   .on("zoom", function () {
                   g.attr("transform", d3.event.transform)
                 }))
                 .append("g");
          g.append("image")
           .attr("width",  ((image.getAttribute("width")) ? image.getAttribute("width") : "100%"))
           .attr("height", ((image.getAttribute("height")) ? image.getAttribute("height") : 600))
           .attr("id", ((image.getAttribute("id")) ? image.getAttribute("id") : ""))
           .attr("alt", ((image.getAttribute("alt")) ? image.getAttribute("alt") : ""))
           .attr("src", image.getAttribute("src"))
           .attr("xlink:href", image.getAttribute("src"));
          image.remove();
        });
      cb();
  }};
});       
