var matchCompute = function (matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref) {
  var devNames = [matz, gosling, rasmus, anders];
  var prefs = [rubyPref, javaPref, phpPref, cSharpPref];
  alert("inside match" + prefs + devNames);
  for (i = 0; i < prefs.length; i++) {
    if (devNames[i]) {
      alert("i = " + i);
      prefs[i] += 2;
    }
  }
  alert("inside match2 = " + prefs + devNames);
  prefs[compSize] += 3;
  alert("inside match3 = " + prefs + devNames);
  for (i = 0; i < prefs.length; i++) {
    alert("inside Math loop");

    if (prefs[i] === Math.max(prefs[0], prefs[1], prefs[2], prefs[3])){
      return i;
    }
    alert("inside Math loop, post if statesment. prefs = " + prefs[i] + " Math.max(prefs[]) = " + Math.max(prefs[0], prefs[1], prefs[2], prefs[3]));
  }
}

alert("0111");
$(document).ready(function(){
  $("#trackQuestions").submit(function(event){
    alert("1");
    var matz = (true == $("input:radio[name=matz]:checked").val());
    var gosling = (true == $("input:radio[name=gosling]:checked").val());
    var rasmus = (true == $("input:radio[name=rasmus]:checked").val());
    var anders = (true == $("input:radio[name=anders]:checked").val());
    var compSize = parseInt($("#compSize").val());

    var rubyPref = parseInt($("#rubyPref").val());
    var javaPref = parseInt($("#javaPref").val());
    var phpPref = parseInt($("#phpPref").val());
    var cSharpPref = parseInt($("#cSharpPref").val());
    alert( matz );

    $(".track").hide();
    var bestMatch = matchCompute(matz, gosling, rasmus, anders, compSize, rubyPref, javaPref, phpPref, cSharpPref);
    alert ("bestMatch is:" + bestMatch);
    if (bestMatch === 0) {
      $("#ruby").show();
    } else if (bestMatch === 1) {
      $("#java").show();
    } else if (bestMatch === 2) {
      $("#php").show();
    } else if (bestMatch === 3) {
      $("#cSharp").show();
    }
    event.preventDefault();
  });




});
