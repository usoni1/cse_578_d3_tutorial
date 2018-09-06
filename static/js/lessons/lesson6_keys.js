function lesson6_keys() {

    var min_val = 10,
        max_val = 30,
        circle_rad = 4,
        last_key = 19;

    var data = [ { key: 0, value: 5 },		//dataset is now an array of objects.
                { key: 1, value: 10 },		//Each object has a 'key' and a 'value'.
                { key: 2, value: 13 },
                { key: 3, value: 19 },
                { key: 4, value: 21 },
                { key: 5, value: 25 },
                { key: 6, value: 22 },
                { key: 7, value: 18 },
                { key: 8, value: 15 },
                { key: 9, value: 13 },
                { key: 10, value: 11 },
                { key: 11, value: 12 },
                { key: 12, value: 15 },
                { key: 13, value: 20 },
                { key: 14, value: 18 },
                { key: 15, value: 17 },
                { key: 16, value: 16 },
                { key: 17, value: 18 },
                { key: 18, value: 23 },
                { key: 19, value: 25 } ];

    clean_up_svg();


    var svg = d3.select("#main_svg"),
        w = parseInt(svg.attr("width")),
        h = parseInt(svg.attr("height")),
        padding = 40;


    var xScale = d3.scalePoint()
                    .domain(d3.range(data.length))
                    .rangeRound([padding, w - padding]);

    var yScale = d3.scaleLinear()
							.domain([0, d3.max(data, function (d) {
							    return d.value;
                            })])
							.range([h - padding, padding]);

    var xAxis = d3.axisBottom()
                          .scale(xScale);

    var yAxis = d3.axisLeft()
                          .scale(yScale);

    var key = function(d) {
        return d.key;
    };

    svg
        .selectAll("circle")
       .data(data, key)
       .enter()
       .append("circle")
       .attr("cx", function (d, i) {
           return xScale(d.key);
       })
       .attr("cy", function (d) {
           return yScale(d.value);
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
        xScale.domain(d3.range(last_key+1));
        yScale.domain([0, d3.max(data, function (d) {
                        return d.value;
                    })]);
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
    // console.log(last_key);
    var add_data_l4 = function () {
        last_key++;
        // console.log(last_key);
        data.push({
            key: last_key,
            value: getRandomInt(min_val, max_val)
        });

        update_scales(data);

        //now it knows withing SVG we are appending more circles
        var circles = svg
            .selectAll("circle")
            .data(data, key);

        circles
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return xScale(d.key);
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
               return xScale(d.key);
             })
            .attr("cy", function (d) {
               return yScale(d.value);
            })
            .attr("r", circle_rad);

        update_axis();

    };

    var delete_data_l4 = function () {
        var k = parseInt($("input:text").val());
        console.log(k);
        var idx_to_remove;
        for(var i = 0; i < data.length; i++) {
            if (data[i].key === k) {
                idx_to_remove = i;
            }
        }
        data.splice(idx_to_remove, 1);
        console.log(data);
        update_scales(data);

        var circles = svg
            .selectAll("circle")
            .data(data, key);

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
        .append("input")
        .attr("type", "text")
        .attr("name", "delete_data_key_l6");

    d3.select("#main_container")
        .append("button")
        .attr("class", "btn btn-default btn-lg")
        .attr("id", "delete_data_l4")
        .html("delete")
        .on("click", delete_data_l4);
}



