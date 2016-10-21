$(function(){
  $("#no").click(function() {
    $("#warning").hide();
    $("#sorry").show();
  });
  $("#yes").click(function() {
    $("#warning").hide();
    $("#webpage").show();
  });
  $("#blanks form").submit(function(event) {
    var name = $("input#name").val();
    var age = parseInt($("input#age").val());
    var genPref = $("input:radio[name=genPref]:checked").val();
    var polPref = $("select#polPref").val();


    event.preventDefault();
  })

});
