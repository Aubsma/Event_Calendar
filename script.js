//load html & css first.
$(document).ready(function () {
    //display current day & time using moment.js
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    //saveBtn/listener for user input and time stamp??
    $(".saveBtn").on("click", function () {
        console.log(this);
        var text = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id");

        //set items in local storage.
        localStorage.setItem(time, text);
    })
      //load any saved data from LocalStorage for each hour
      $("#hour8 .description").val(localStorage.getItem("hour8"));
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17"));

      function hourTracker() {
        //get current number of hours.
        var currentHour = moment().hour(); // use of moment.js

        // loop over time blocks
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
            
            //check if we've moved past this time, click into css/html given classes of past, present, or future
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker(); //re-run function
})