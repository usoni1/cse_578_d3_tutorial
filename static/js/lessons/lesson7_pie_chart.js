function lesson7_pie_chart() {
    clean_up_svg();

    //Width and height
    var svg = d3.select("#main_svg"),
    w = parseInt(svg.attr("width")),
    h = parseInt(svg.attr("height"));
    var dataset = [ 5, 10, 20, 45, 6, 25 ];
    var outerRadius = w / 2;
    var innerRadius = 0;
    var arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius);

    var pie = d3.pie();

    //Easy colors accessible via a 10-step ordinal scale
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    //Create SVG element


    //Set up groups
    var arcs = svg.selectAll("g.arc")
                  .data(pie(dataset))
                  .enter()
                  .append("g")
                  .attr("class", "arc")
                  .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

    //Draw arc paths
    arcs.append("path")
        .attr("fill", function(d, i) {
            return color(i);
        })
        .attr("d", arc);

    //Labels
    arcs.append("text")
        .attr("transform", function(d) {
            return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(function(d) {
            return d.value;
        });
}