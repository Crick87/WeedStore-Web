$('document').ready(function(){

  // Fix floating label with initial value
  $('.floating-label .custom-select, .floating-label .form-control').floatinglabel();

  $('.fab-add').hide()
  setTimeout(function() {
    $('.fab-add').show();
    $('.fab-add').effect ("scale", { mode : "hide" }, 0.0001);
    $('.fab-add').effect ("scale", { mode : "show", direction: "both", fade: "true" }, 500);
  }, 650);


});
