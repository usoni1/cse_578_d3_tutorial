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
        .attr("y", 100);
}