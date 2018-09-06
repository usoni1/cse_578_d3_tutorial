function initialize() {
    $("#select_viz")
        .change(function() {
           var viz = $("#select_viz option:selected").val();
           if(viz === "teaching_console"){
               location.reload();
           } else if(viz === "lesson1_data_simple") {
               lesson1_data_simple();
           } else if(viz === "lesson2_data_actual") {
               lesson2_data_actual();
           } else if(viz === "lesson3_data_viz") {
               lesson3_data_viz();
           } else if(viz === "lesson4_data_viz_enter_exit") {
               lesson4_enter_exit();
           } else if(viz === "lesson5_scales") {
               lesson5_scales();
           }
           else if(viz === "lesson6_keys") {
               lesson6_keys();
           }
           else if(viz === "lesson7_pie_chart") {
               lesson7_pie_chart();
           }
           else {
               console.log("Wrong Viz selected");
           }
        });
}

$(document).ready(initialize);