import users from "../users.json" assert { type: "json" };

// Function to calculate SHA-256 hash
async function calculateSHA256Hash(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

var form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("name").value;
  var password = document.getElementById("password").value;
  calculateSHA256Hash(password)
    .then((result) => {
      let n = 0;
      for (let i = 0; i <= 11; i++) {
        if (users[i]["name"] == username && users[i]["password"] == result) {
          window.location = "./apps/clock/index.html";
          n++;
          break;
        }
      }
      if (n == 0) {
        document.getElementById("show").innerHTML =
          "<p id='card-footer'>Incorrect Username or Password!</p>";
      }
    })
    .catch((error) => console.error("Error Calculating Hash:".error, error));
});
