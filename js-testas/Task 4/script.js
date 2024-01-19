/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  fetch("./cars.json")
    .then((response) => response.json())
    .then((data) => {
      displayCarBrands(data);
    })
    .catch((error) => {
      console.error("Klaida gaunant duomenis iš failo:", error);
    });

  function displayCarBrands(carData) {
    const outputContainer = document.getElementById("output");
    carData.forEach((brand) => {
      const brandCard = document.createElement("div");
      brandCard.classList.add("brand-card");

      const brandTitle = document.createElement("h2");
      brandTitle.textContent = brand.brand;
      brandCard.appendChild(brandTitle);

      const modelList = document.createElement("ul");

      brand.models.forEach((model) => {
        const modelItem = document.createElement("li");
        modelItem.textContent = model;
        modelList.appendChild(modelItem);
      });

      brandCard.appendChild(modelList);
      outputContainer.appendChild(brandCard);
    });
  }
});
