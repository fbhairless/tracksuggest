$(document).ready(function(event) {
  $("select").submit(function() {
    var questions = ("questions:checked").val();
    alert("got to the beginning of the form submit");
    event.preventDefault();
    console.log(selection);
  });

});
