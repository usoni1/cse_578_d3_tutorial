function lesson1_data_simple() {
    var data = [5, 10, 15, 20, 25];

    clean_up_svg();

    //adds a single element in svg and also associates a data element to it
    d3
        .select("#main_svg")
        .append("text")
        .datum(5)
        .text(function(d) {
            return "single element with data: " + d;
        })
        .attr("x", 100)
        .attr("y", 100)
        .attr("id", "simple_data");

    // adds multiple elements in svg and associates data with all of them
    for (var i=0; i <= 4; i++) {
        d3
            .select("#main_svg")
            .append("text")
            .datum(data[i])
            .text(function(d) {
                return "multiple element with data: " + d;
            })
            .attr("x", 100)
            .attr("y", 150 + i*50)
            .attr("id", "simple_data");
    }

}