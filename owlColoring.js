

let dataset = [1, 3, 33, 20, 9, 5,4,5,12,11,2];
const  w = window.screen.width,
       h = window.screen.height,
   scale = 20,
   barPadding= 10;


var svg = d3.select("body")
            .append("svg")
           .attr("width", 9)
           .attr("height", h);




  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) { return i * (w/dataset.length);})
    .attr("y",  function(d){ h - d})
    .attr("width", w/dataset.length - barPadding)
    .attr("height", function(d){ return  d * scale } )
    .attr("fill",function(d) {
           return "rgb(0, 0, " + (d * 10) + ")";
      });


/*

var width = 420,
    barHeight = 20;


      var defs = svg.append("defs");
      var gradient = defs.append("linearGradient")
         .attr("id", "svgGradient")
         .attr("x1", "0%")
         .attr("x2", "100%")
         .attr("y1", "0%")
         .attr("y2", "100%");
      gradient.append("stop")
         .attr('class', 'start')
         .attr("offset", "0%")
         .attr("stop-color", "red")
         .attr("stop-opacity", 1);
      gradient.append("stop")
         .attr('class', 'end')
         .attr("offset", "100%")
         .attr("stop-color", "blue")
         .attr("stop-opacity", 1);



var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * data.length);

var bar = chart.selectAll("g")
    .data(data)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1)
    .attr("fill", "url(#svgGradient)");

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

*/
