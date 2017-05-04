define(
  ["geonovum/deps/d3"],
  function(d3){
  /**
   * Makes figures scalable via zoom and pan function
   *
   */ 
  
  //function reset() {
  //  svg.transition()
  //     .duration(750)
  //     .attr("transform", "translate(0, 0)scale(1)")
  //     .call(d3.zoom());
  //};

  return {
    run: function(conf, doc, cb) {
      Array
        .from(doc.querySelectorAll("figure.scalable img"))
        .forEach(function(image){
          console.log(image, image.width, image.height);
          var svg = d3.select(image.parentElement)
                      .insert("svg", ":first-child")
                      .attr("id", (image.id ? image.id : ""))
                      .attr("alt", (image.alt ? image.alt : ""));
          var g = svg.append("g")
                     .attr("transform", "translate(0, 0)scale(1)")
                     .call(d3.zoom()
                       .scaleExtent([1, 6])
                       .on("zoom", function () {
                       g.attr("transform", d3.event.transform)
                     }))
                     .append("g");
          g.append("image")
           .attr("height", ((image.height < 600) ? image.height : image.height = 600))
           .attr("width", ((image.width) ? image.width : image.width = "auto"))
           .attr("src", image.src)
           .attr("xlink:href", image.src);
           
          var reset_button = d3.select(image.parentElement)
                               .insert("button", ":nth-child(2)")
                               .attr("class", "")
                               .attr("type", "button")
                               .text("Reset");
          //d3.select(reset_button).on("click", reset);
          var enlarge_button = d3.select(image.parentElement)
                                 .insert("button", ":nth-child(2)")
                                 .attr("class", "")
                                 .attr("type", "button")
                                 .text("Enlarge");
          d3.select(enlarge_button).on("click", window.open(image.src));
          
          image.remove();
        });
      cb();
    }};
  });       
