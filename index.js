import users from "../users.json" assert { type: "json" };

var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    let n = 0;
    for (let i = 0; i <= 11; i++) {
    if (users[i]["name"] == username && users[i]["password"] == password) {
        window.location = "../clock/index.html";
        n++;
        break;
    }

    } if (n == 0) {
    document.getElementById("show").innerHTML = "<p id='card-footer'>Incorrect Username or Password!</p>";
}
});
