(function(){

var title = document.querySelector('h1');

title.innerHTML = "7 MINUTE WORKOUT";

var workout = 11;
var rest = 11;
var setNum = 1;

var myFunc = function(){
  var name = "Func1";
  document.getElementById("Func1").innerHTML = name + Date();
};
myFunc();

var myFunc2 = function() {
  var name = "Func2";
  document.getElementById("Func2").innerHTML = name + Date();
}
myFunc2();

var fullWorkout = setInterval(function() {
document.getElementById("Exercise").innerHTML = setNum;

  var workoutTimer = setInterval(function() {
      document.getElementById("Workout").innerHTML = -- workout;

      if (workout == 0)
      {
        clearInterval(workoutTimer);
        workout = 11;
        setNum++;
      }
    }, 1000);

  var restTimeout = setTimeout (function() {
    var restTimer = setInterval(function() {
        document.getElementById("Rest").innerHTML = -- rest;

        if (rest == 0 && setNum == 100){
            clearInterval(restTimer);
            document.getElementById("Exercise").innerHTML = "YOU'RE DONE!";

        else if (rest == 0)
        {
          clearInterval(restTimer);
          rest = 11;
        }

      }, 1000);
  }, 10000);

  if(setNum == 2)
  {
    clearInterval(fullWorkout);
    setNum = 99;
  }

}, 20000);

})();
