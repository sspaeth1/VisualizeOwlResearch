       //Width and height
        var w = 800;
        var h = 230;
        
        var dataset = [1, 3, 33, 20, 9, 5,4,5,12,11,2];
        
        var xScale = d3.scaleBand()
                        .domain(d3.range(dataset.length))
                        .rangeRound([0, w])
                        .paddingInner(0.05);

        var yScale = d3.scaleLinear()
                        .domain([0, d3.max(dataset)])
                        .range([0, h -20]);

        
        //Create SVG element
        var svg = d3.select("div.owlChart")
                    .append("svg")
                    .attr("width", w + 15)
                    .attr("height", h + 65);

        //Create bars
        svg.selectAll("rect")
           .data(dataset)
           .enter()
           .append("rect")
           .attr("x", function(d, i) {
                   return xScale(i);
           })
           .attr("y", function(d) {
                   return h - yScale(d);
           })
           .attr("width", xScale.bandwidth())
           .attr("height", function(d) {
                   return yScale(d);
           })
           .attr("fill", function(d, i) {
                return "hsl(27, 25%," + (100 - i*9)  + "%)";
           });

        //Create labels
        svg.selectAll("text")
           .data(dataset)
           .enter()
           .append("text")
           .text(function(d) {
                   return d;
           })
           .attr("text-anchor", "middle")
           .attr("x", function(d, i) {
                   return xScale(i) + xScale.bandwidth() / 2;
           })
           .attr("y", function(d) {
                   return h - yScale(d) - 3;
           })
           .attr("font-family", "sans-serif")
           .attr("font-size", "20px")
           .attr("font-weight", "bold")
           .attr("fill", "#666");


        // text label for the x axis
        svg.append("text")             
            .attr("transform",
                    "translate(420, 275)")
            .style("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "15px")
            .attr("font-weight", "bold")
            .attr("fill", "#999")
            .text("Color Score");

        // Add scales to axis
        var x_axis = d3.axisBottom()
        .scale(xScale);
        
        svg.append("g")
            .attr("transform", "translate(0," + h + ")")
            .call(x_axis);

        // text label for the y axis
        svg.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", "1em")
            .attr("dx", "-3em")
            .attr("transform", "translate(100, 90)")
            .attr("transform", "rotate(-90)")
            .attr("font-family", "sans-serif")
            .attr("font-size", "15px")
            .attr("font-weight", "bold")
            .attr("fill", "#999")
            .text("Frequence (%)");   
            
            var y_axis = d3.axisLeft()
             .scale(yScale);

            //Append group and insert axis
            svg.append("g")
            .attr("transform", "translate(2, 20)")
            
            .call(y_axis);
    
