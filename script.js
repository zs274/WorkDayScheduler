// displays date under heading
var today = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(today);

// looks for input and gets values
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var time = $(this).closest('div').attr('id');
        var text = $(this).siblings('textarea').val();
        console.log("jquery", time)
        console.log("text", text)

        // saves to local storage
        localStorage.setItem(time, text);
    })

    // changes CSS styling depending on time
    // needs to check time, then if it's in the past remove or add class
    function currentTime() {
        var rightNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            // To check the time and add the classes to change the block colour 
            if (blockTime < rightNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === rightNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // get from local storage 

    $("#hour8 textarea").val(localStorage.getItem("hour8"));
    $("#hour9 textarea").val(localStorage.getItem("hour9"));
    $("#hour10 textarea").val(localStorage.getItem("hour10"));
    $("#hour11 textarea").val(localStorage.getItem("hour11"));
    $("#hour12 textarea").val(localStorage.getItem("hour12"));
    $("#hour13 textarea").val(localStorage.getItem("hour13"));
    $("#hour14 textarea").val(localStorage.getItem("hour14"));
    $("#hour15 textarea").val(localStorage.getItem("hour15"));
    $("#hour16 textarea").val(localStorage.getItem("hour16"));
    $("#hour17 textarea").val(localStorage.getItem("hour17"));

    currentTime();
});
