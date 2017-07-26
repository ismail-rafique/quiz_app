var startQuiz = document.getElementById("startQuiz");
var user = document.getElementById("user");
var pass = document.getElementById("pass");

window.onload = function() {
    
}

startQuiz.addEventListener("click", function(){
    var loginData = JSON.parse(localStorage.getItem("loginData"));
    if((user.value === loginData.user) && (pass.value === loginData.pass)) {
        window.location = 'quiz.html'
    
    }
    else {
        alert("Please enter valid user-id and passowrd");
    }
})