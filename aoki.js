
$(document).ready(function() {
    $(document).on("mouseover", function () {
        //update colors and visibility on hover
        $("#main").css("color", "#C3483C");
        $("#back").css("display", "block");
        document.body.style.background = "#FBFAF8";

    });

    $(document).on("mouseout", function () {
        //update colors and visibility on hover
        $("#main").css("color", "#FBFAF8");
        $("#back").css("display", "none");
        document.body.style.background = "#F9A52A";

    });
    
  });
  