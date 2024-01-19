/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const outputDiv = document.getElementById("output");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const weightInKg = parseFloat(document.getElementById("search").value);

    if (!isNaN(weightInKg) && weightInKg >= 0) {
      const weightInLb = weightInKg * 2.2046;
      const weightInG = weightInKg / 0.001;
      const weightInOz = weightInKg * 35.274;

      const resultHTML = `
          <p>Weight in pounds (lb): ${weightInLb.toFixed(2)}</p>
          <p>Weight in grams (g): ${weightInG.toFixed(2)}</p>
          <p>Weight in ounces (oz): ${weightInOz.toFixed(2)}</p>
        `;

      outputDiv.innerHTML = resultHTML;
    } else {
      outputDiv.innerHTML =
        "<p>Please enter a valid positive number for weight.</p>";
    }
  });
});
