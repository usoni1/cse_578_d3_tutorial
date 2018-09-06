function clean_up_svg() {
    d3
        .select("#main_svg")
        .selectAll("*")
        .remove();
}