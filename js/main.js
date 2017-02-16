$(document).ready(function() {
    $("button.signin").click(function(){
      $("div.modal").fadeIn()
    });

    $("button.close").click(function(){
      $("div.modal").fadeOut()
    });

    $("button.submit").click(function(){
      $("form.getstarted input").addClass("error");
    });

    $("form.getstarted input").focus(function(){
      $( ":focus" ).removeClass("error");
    });
});
