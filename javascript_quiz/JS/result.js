var result = document.getElementById('result');
var greet = document.getElementById('greet');
var percentage = document.getElementById('percentage');
var remarks = document.getElementById('remarks');

window.onload = function() {
    var score = localStorage.getItem('score');
    if(score) {
        var score = parseFloat(score);
        if(score > 50) {
            greet.innerHTML = "Congratulations!";
            remarks.innerHTML = "You have successufully passed JavaScript Basics";
            percentage.innerHTML = Math.round(score) + "%";
        }
        else {
            greet.innerHTML = "Sorry!";
            remarks.innerHTML = "You have Failed";
            percentage.innerHTML = Math.round(score) + "%";
        }
    }
    else {
        greet.innerHTML = "There is no Score Data";
    }
}