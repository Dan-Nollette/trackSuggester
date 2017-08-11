var matchCompute = function (matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref) {
  var devNames = [matz, gosling, rasmus, anders];
  var prefs = [rubyPref, javaPref, phpPref, cSharpPref];
  for (i = 0; i < prefs.length; i++) {
    if (devNames[i]) {
      prefs[i] += 2;
    }
  }
  prefs[compSize] += 3;
  for (i = 0; i < prefs.length; i++) {
    if (prefs[i] === Math.max(prefs[0], prefs[1], prefs[2], prefs[3])){
      return i;
    }
  }
}

$(document).ready(function(){
  $("#trackQuestions").submit(function(event){
    var matz = (true == $("input:radio[name=matz]:checked").val());
    var gosling = (true == $("input:radio[name=gosling]:checked").val());
    var rasmus = (true == $("input:radio[name=rasmus]:checked").val());
    var anders = (true == $("input:radio[name=anders]:checked").val());

    var compSize = parseInt($("#compSize").val());

    var rubyPref = parseInt($("#rubyPref").val());
    var javaPref = parseInt($("#javaPref").val());
    var phpPref = parseInt($("#phpPref").val());
    var cSharpPref = parseInt($("#cSharpPref").val());

    $(".track").hide();
    var bestMatch = matchCompute(matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref);
    if (bestMatch === 0) {
      $("#ruby").fadeToggle();
    } else if (bestMatch === 1) {
      $("#java").fadeToggle();
    } else if (bestMatch === 2) {
      $("#php").fadeToggle();
    } else if (bestMatch === 3) {
      $("#cSharp").fadeToggle();
    }
    event.preventDefault();
  });
});
