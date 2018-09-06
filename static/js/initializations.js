function initialize() {
    $("#select_viz")
        .change(function() {
           var viz = $("#select_viz option:selected").val();
           if(viz === "teaching_console"){
               location.reload();
           } else if(viz === "lesson1_data") {
               lesson1_data_simple();
           } else {
               console.log("Wrong Viz selected");
           }
        });
}

$(document).ready(initialize);