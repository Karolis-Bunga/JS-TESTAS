/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const outputDiv = document.getElementById("output");
const messagePara = document.getElementById("message");
const showUsersBtn = document.getElementById("btn");

showUsersBtn.addEventListener("click", () => {
  outputDiv.innerHTML = "";
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";

        const loginPara = document.createElement("p");
        loginPara.textContent = `Login: ${user.login}`;

        const avatarImg = document.createElement("img");
        avatarImg.src = user.avatar_url;
        avatarImg.alt = "User Avatar";

        userCard.appendChild(loginPara);
        userCard.appendChild(avatarImg);

        outputDiv.appendChild(userCard);
      });

      messagePara.style.display = "none";
    });
});
