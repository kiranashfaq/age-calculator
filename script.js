var calculator = document.getElementById("cal");
var month = document.getElementById("mon");
var years = document.getElementById("yearss");
var days = document.getElementById("dayss");
function calculate(value) {
  var birthOfDate = document.getElementById("birthDate");
  var birthDate = new Date(birthOfDate.value);
  var current = new Date();
  var age = current - birthDate;
  var finalAge = Math.floor(age / (365.25 * 24 * 60 * 60 * 1000));
  years.innerHTML = finalAge;

  var ageInMonths = Math.floor(finalAge * 12);
  month.innerHTML = ageInMonths;
  //   console.log(ageInMonths);
  var ageInDays = Math.floor(
    finalAge * 365.25 + (current.getDate() - birthDate.getDate())
  );
  days.innerHTML = ageInDays;
}
