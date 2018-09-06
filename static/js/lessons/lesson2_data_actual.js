function lesson2_data_actual() {
    var data = [5, 10, 15, 20, 25];

    clean_up_svg();

   d3
       .select("#main_svg")
       .selectAll("text")
       .data(data)
       .enter()
       .append("text")
       .attr("x", 100)
       .attr("y", function (d, i) {
           return i*100 + 50;
       })
       .text(function (d) {
           return "multiple elements with proper d3 way: " + d;
       })
       .style("fill", function (d) {
           if (d > 10) {
               return "red";
           }
           return "black";
       });
}