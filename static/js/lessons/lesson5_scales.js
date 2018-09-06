function lesson5_scales() {

    var init_data_len = 5,
        min_val = 10,
        max_val = 200,
        circle_rad = 4,
        data_len = init_data_len;

    var data = d3
        .range(init_data_len)
        .map(function () {
            return getRandomInt(min_val, max_val);
        });

    clean_up_svg();


    var svg = d3.select("#main_svg"),
        w = parseInt(svg.attr("width")),
        h = parseInt(svg.attr("height")),
        padding = 40;


    var xScale = d3.scalePoint()
                    .domain(d3.range(data.length))
                    .rangeRound([padding, w - padding]);

    var yScale = d3.scaleLinear()
							.domain([0, d3.max(data)])
							.range([h - padding, padding]);

    var xAxis = d3.axisBottom()
                          .scale(xScale);

    var yAxis = d3.axisLeft()
                          .scale(yScale);


    svg
        .selectAll("circle")
       .data(data)
       .enter()
       .append("circle")
       .attr("cx", function (d, i) {
           return xScale(i);
       })
       .attr("cy", function (d) {
           return yScale(d);
       })
       .attr("r", circle_rad);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    //Create Y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    var update_scales = function(data) {
        xScale.domain(d3.range(data.length));
        yScale.domain([0, d3.max(data)]);
    };

    var update_axis = function() {

        //Update X axis
        svg.select(".x.axis")
            .transition()
            .duration(1000)
            .call(xAxis);

        //Update Y axis
        svg.select(".y.axis")
            .transition()
            .duration(1000)
            .call(yAxis);
    };

    var add_data_l4 = function () {
        data_len++;
        data = d3
            .range(data_len)
            .map(function () {
                return getRandomInt(min_val, max_val);
            });

        update_scales(data);

        //now it knows withing SVG we are appending more circles
        var circles = svg
            .selectAll("circle")
            .data(data);

        circles
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return xScale(i);
            })
            .attr("cy", function() {
                return 0;
            })
            .attr("r", circle_rad)
            .attr("fill", "blue")
            .merge(circles)
            .transition()
            .duration(1000)
            .attr("cx", function (d, i) {
               return xScale(i);
             })
            .attr("cy", function (d) {
               return yScale(d);
            })
            .attr("r", circle_rad);

        update_axis();

    };

    var delete_data_l4 = function () {
        data_len--;
        data = d3
            .range(data_len)
            .map(function () {
                return getRandomInt(min_val, max_val);
            });

        update_scales(data);

        var circles = svg
            .selectAll("circle")
            .data(data);

        circles
            .exit()
            .attr("fill", "red")
            .transition()
            .duration(1000)
            .attr("cy", 0)
            .remove();

        update_axis();
    };


   // $("#main_container")
   //      .append("<button type=\"button\" class=\"btn btn-default btn-lg\" onclick='add_data_l4()' id='lesson4_add_data'>" +
   //          "Randomize data" +
   //          "</button>");
   //
   // $("#main_container")
   //      .append("<button type=\"button\" class=\"btn btn-default btn-lg\" onclick='delete_data_l4()' id='lesson4_delete_data'>" +
   //          "Randomize data" +
   //          "</button>");

    d3.select("#main_container")
        .append("button")
        .attr("class", "btn btn-default btn-lg")
        .attr("id", "add_data_l4")
        .html("add")
        .on("click", add_data_l4);

    d3.select("#main_container")
        .append("button")
        .attr("class", "btn btn-default btn-lg")
        .attr("id", "delete_data_l4")
        .html("delete")
        .on("click", delete_data_l4);
}



