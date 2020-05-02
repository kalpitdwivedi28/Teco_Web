// Popup SignIn Form:-
// signIn form open
function signIn() {
    $("#signin_main").fadeTo(1000, 1, function () {
      $("#signin_main").slideDown(800);
    });
  };

// signIn form End
function slideUp() {
  $("#signin_main").fadeToggle(1000, function () {
      $("#signin_main").slideUp(800);
    });
  };

// Popup SignUp Form:-
// signUp form open
function down() {
    $("#signup_main").fadeTo(1000, 1, function () {
      $("#signup_main").slideDown(800);
    });
  };

// signUp form end
function signUp() {
  $("#signup_main").fadeToggle(1000, function () {
      $("#signup_main").slideUp(800);
    });
  };  


// Popup search input box:-
    function searchOpen() {
        $("#searchbox").fadeIn();
    }

    function searchClose() {
        $("#searchbox").fadeOut();
    }
