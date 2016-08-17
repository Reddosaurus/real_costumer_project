/* Open when someone clicks on the span element */
  function openNav() {
    $('#mobile-nav').css('width', '100%');
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    $('#mobile-nav').css('width', '0%');
  }

$(document).ready(function() {

});

  $(document).ready(function() {
    $(".slide").fadeIn(7000);
  });

  $(document).ready(function() {
    $("#active").click(function() {
      $("#active").removeClass(".nav").addClass("a .active-site");
      $("#active").css("color", "red");
    })
  });

  /* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
