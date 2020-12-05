var margin = { top: 40, right: 20, bottom: 30, left: 40 },
  width = 0.8 * document.getElementById("topBox").clientWidth;
height = 6 * document.getElementById("topBox").clientHeight;

var formatPercent = d3.format(".0%");

var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1);

var y = d3.scale.linear().range([height, 0]);

var xAxis = d3.svg.axis().scale(x).orient("bottom");

var yAxis = d3.svg.axis().scale(y).orient("left");

var tip = d3
  .tip()
  .attr("class", "d3-tip")
  .offset([-10, 0])
  .html(function (d) {
    return "<strong>Frequency:</strong> <span style='color: #fff'>" + d.frequency + "</span>";
  });

var svg = d3
  .select("#owlChart")
  .append("svg")
  .attr("width", width)
  .attr("height", height * 1.25)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.call(tip);

d3.csv("data/owlData.csv", type, function (error, data) {
  x.domain(
    data.map(function (d) {
      return d.colorScore;
    })
  );
  y.domain([
    0,
    d3.max(data, function (d) {
      return d.frequency;
    }),
  ]);

  svg
    .append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  svg
    .append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Frequency");

  svg
    .selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", function (d) {
      return x(d.colorScore);
    })
    .attr("width", x.rangeBand())
    .attr("y", function (d) {
      return y(d.frequency);
    })
    .attr("height", function (d) {
      return height - y(d.frequency);
    })
    .on("mouseover", tip.show)
    .on("mouseout", tip.hide);
});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
