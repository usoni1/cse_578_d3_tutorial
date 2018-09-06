function lesson4_enter_exit() {

    var init_data_len = 5,
        min_val = 10,
        max_val = 200,
        x_space = 50,
        circle_rad = 4,
        data_len = init_data_len;

    var data = d3
        .range(init_data_len)
        .map(function () {
            return getRandomInt(min_val, max_val);
        });

    clean_up_svg();

    var svg = d3.select("#main_svg");

    svg
        .selectAll("circle")
       .data(data)
       .enter()
       .append("circle")
       .attr("cx", function (d, i) {
           return i*x_space + 10;
       })
       .attr("cy", function (d) {
           return d;
       })
       .attr("r", circle_rad);

    var add_data_l4 = function () {
        data_len++;
        data = d3
            .range(data_len)
            .map(function () {
                return getRandomInt(min_val, max_val);
            });

        //now it knows withing SVG we are appending more circles
        var circles = svg
            .selectAll("circle")
            .data(data);

        circles
            .enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return i*x_space + 10;
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
               return i*x_space + 10;
             })
            .attr("cy", function (d) {
               return d;
            })
            .attr("r", circle_rad);
    };

    var delete_data_l4 = function () {
        data_len--;
        data = d3
            .range(data_len)
            .map(function () {
                return getRandomInt(min_val, max_val);
            });

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



