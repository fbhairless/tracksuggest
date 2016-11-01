$(document).ready(function() {
  $("#select").submit(function(event) {
    event.preventDefault();
    var questions = $('input:radio[name=questions]:checked').val();
    console.log(questions);
  });
});
