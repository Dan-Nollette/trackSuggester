var matchCompute = function (matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref) {
  scores[]



}

$(document).ready(function(){
  $("#trackQuestions").submit(function(event){
    var matz = $("input:radio[name=matz]:checked").val();
    var gosling = $("input:radio[name=gosling]:checked").val();
    var rasmus = $("input:radio[name=rasmus]:checked").val();
    var anders = $("input:radio[name=anders]:checked").val();

    var compSize = $("#compSize").val();

    var rubyPref = $("#rubyPref").val();
    var javaPref = $("#javaPref").val();
    var phpPref = $("#phpPref").val();
    var cSharpPref = $("#cSharpPref").val();

    var bestMatch = matchCompute(matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref)
    $(".track").hide();
    for 
    (event).preventDefault();
  });




});
