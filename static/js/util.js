function clean_up_svg() {
    d3
        .select("#main_svg")
        .selectAll("*")
        .remove();

    $('#lesson3_randomize_data').remove();
    $('#add_data_l4').remove();
    $('#delete_data_l4').remove();

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}