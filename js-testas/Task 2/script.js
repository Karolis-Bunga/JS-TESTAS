/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var btnElement = document.getElementById("btn__element");
var btnState = document.getElementById("btn__state");
var clickCount = 0;

btnElement.addEventListener("click", function () {
  clickCount++;
  btnState.innerText = clickCount;
});
