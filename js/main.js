let productsContainer = document.getElementById("productsContainer");
/** All Products */
let allProductsArr = [];

/** Handle First Display */
let localStorageArr = localStorage.getItem("allProductsArr");
if (localStorageArr) {
  allProductsArr = JSON.parse(localStorageArr);
  displayProducts();
}

function displayProducts() {
  let productContainerHolder = "";
  for (let i = 0; i < allProductsArr.length; i++) {
    let randomOffers = Math.round(Math.random() * 15);
    productContainerHolder += `
              <div class="col-6 col-md-4 col-lg-3">
                <div class="h-100 position-relative " >
                <span class="badge bg-danger position-absolute top-0 end-0 z-1 m-3">-${randomOffers}%</span>
                  <div class="card h-100 shadow">
                    <figure class="mb-0">
                      <img class="card-img-top" height="250px" src="assets/images/${allProductsArr[i].Images}" alt="" />
                    </figure>
                    <div class="card-header"><p class="card-title">${allProductsArr[i].Name}</p></div>
                    <div class="card-body">
                      <div class="card-text">
                        <p>Condition: ${allProductsArr[i].Condition}</p>
                        <p>Category: ${allProductsArr[i].Category}</p>
                        <p>Description: ${allProductsArr[i].Description}</p>
                      </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between">
                    <span>${allProductsArr[i].Price} L.E</span>
                    <span class="text-warning">
                    <i class="fa-fw ms-1 fa-solid fa-star"></i>
                    <i class="fa-fw ms-1 fa-solid fa-star"></i>
                    <i class="fa-fw ms-1 fa-solid fa-star"></i>
                    <i class="fa-fw ms-1 fa-solid fa-star"></i>
                    <i class="fa-fw ms-1 fa-solid fa-star-half-stroke"></i>
                    </span>
                    </div>
                    <div class="text-center my-3 d-flex gap-1 justify-content-between p-2">
                    <button class="btn-success flex-grow-1 btn">Add To Cart</button>
                    <button class="btn-danger btn"><i class="fa-solid fa-heart"></i></button>
                    </div>
                  </div>
                </div>
              </div>
    `;
  }
  productsContainer.innerHTML = productContainerHolder;
}

function startSearch(searchValue) {
  let productContainerHolder = "";
  for (let i = 0; i < allProductsArr.length; i++) {
    if (allProductsArr[i].Name.toLowerCase().includes(searchValue.value.toLowerCase())) {
      productContainerHolder += `
              <tr>
                <td class="border-start border-end">${i + 1}</td>
                <td class="border-start border-end">${allProductsArr[i].Name.replaceAll(
                  new RegExp(searchValue.value, "gi"),
                  (match) => `<span class="text-danger">${match}</span>`
                )}</td>
                <td class="border-start border-end">${allProductsArr[i].Price}</td>
                <td class="border-start border-end">${allProductsArr[i].Condition}</td>
                <td class="border-start border-end">${allProductsArr[i].Category}</td>
                <td class="border-start border-end">${allProductsArr[i].Description}</td>
                <td class="border-start border-end"><img src="../assets/images/${allProductsArr[i].Images}"/></td>
              </tr>
    `;
    }
  }
  productsContainer.innerHTML = productContainerHolder;
}
