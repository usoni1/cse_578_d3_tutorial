function lesson3_data_viz() {
    var data_len = 20,
        min_val = 10,
        max_val = 200,
        x_space = 50,
        circle_rad = 4;

    var data = d3
        .range(data_len)
        .map(function () {
            return getRandomInt(min_val, max_val);
        });

    clean_up_svg();

    d3
       .select("#main_svg")
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

    console.log(data);

    $("#main_container")
        .append("<button type=\"button\" class=\"btn btn-default btn-lg\" onclick='lesson3_data_viz()' id='lesson3_randomize_data'>" +
            "Randomize data" +
            "</button>");
}