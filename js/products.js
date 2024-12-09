/** Form Inputs */
let addProductBtn = document.getElementById("addProductBtn");
let updateProductBtn = document.getElementById("updateProductBtn");

/** Form Fields */
let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCondition = document.getElementById("productCondition");
let productCategory = document.getElementById("productCategory");
let productDescription = document.getElementById("productDescription");
let productImages = document.getElementById("productImages");

/** All Products */
let allProductsArr = [];
let productsContainer = document.getElementById("productsContainer");
let currentProductIndex;

/** Handle Buttons Events */
addProductBtn.addEventListener("click", () => {
  createProduct();
});
updateProductBtn.addEventListener("click", () => {
  console.log("Hello");
});

/** Handle First Display */
let localStorageArr = localStorage.getItem("allProductsArr");
if (localStorageArr) {
  allProductsArr = JSON.parse(localStorageArr);
  displayProducts();
}

/** Create Product */
function createProduct() {
  if (startRegex()) return;

  let product = {
    Name: productName.value,
    Price: productPrice.value,
    Condition: productCondition.value,
    Category: productCategory.value,
    Description: productDescription.value,
    Images: productImages?.files[0]?.name || "product-5.jpg",
  };
  addProduct(product);
}

function addProduct(product) {
  allProductsArr.push(product);
  localStorage.setItem("allProductsArr", JSON.stringify(allProductsArr));
  displayProducts();
  handleSuccessMessage("Product Added Successfully");
  console.log(allProductsArr);
}

/** retrieve Products */

function displayProducts() {
  let productContainerHolder = "";
  for (let i = 0; i < allProductsArr.length; i++) {
    productContainerHolder += `
              <tr>
                <td class="border-start border-end">${i + 1}</td>
                <td class="border-start border-end">${allProductsArr[i].Name}</td>
                <td class="border-start border-end">${allProductsArr[i].Price}</td>
                <td class="border-start border-end">${allProductsArr[i].Condition}</td>
                <td class="border-start border-end">${allProductsArr[i].Category}</td>
                <td class="border-start border-end">${allProductsArr[i].Description}</td>
                <td class="border-start border-end"><img src="../assets/images/${allProductsArr[i].Images}"/></td>
                <td class=" border-start border-end">
                <div class=" d-flex gap-1 ">
                <button onclick="onDeleteProductClick(${allProductsArr.indexOf(
                  allProductsArr[i]
                )})" class="btn btn-outline-danger"><i class="fa-solid fa-trash fs-4"></i></button>
                <button onclick="onUpdateProductClick(${allProductsArr.indexOf(
                  allProductsArr[i]
                )})" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square fs-4"></i></button>
                </div>
                </td>
              </tr>
    `;
  }
  productsContainer.innerHTML = productContainerHolder;
}

/** delete Product */
function onDeleteProductClick(index) {
  allProductsArr.splice(index, 1);
  localStorage.setItem("allProductsArr", JSON.stringify(allProductsArr));
  displayProducts();
}
/** update Product */
function onUpdateProductClick(index) {
  toggleFormButtons();
  currentProductIndex = index;
  let currentProductObj = allProductsArr[index];
  console.log(currentProductObj);
  productName.value = currentProductObj.Name;
  productPrice.value = currentProductObj.Price;
  productCondition.value = currentProductObj.Condition;
  productCategory.value = currentProductObj.Category;
  productDescription.value = currentProductObj.Description;
}

function UpdateProduct() {
  currentProductObj = allProductsArr[currentProductIndex];
  let currentProductImage = currentProductObj.Images;

  let product = {
    Name: productName.value,
    Price: productPrice.value,
    Condition: productCondition.value,
    Category: productCategory.value,
    Description: productDescription.value,
    Images: productImages.files.length > 0 ? productImages.files[0].name : currentProductImage,
  };
  console.log(product);
  allProductsArr.splice(currentProductIndex, 1, product);
  localStorage.setItem("allProductsArr", JSON.stringify(allProductsArr));
  displayProducts();
  toggleFormButtons(); // handle buttons toggle
}

/** Handle Success Message */
function handleSuccessMessage(message) {
  Swal.fire({
    position: "center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
/** Handle Validation Message */
function handleValidationMessage(message) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
}

/** Handle Displayed Buttons inside form */
function toggleFormButtons() {
  addProductBtn.classList.toggle("d-none");
  updateProductBtn.classList.toggle("d-none");
}

/** Handle Regex */
function startRegex() {
  if (
    productName.value.length === 0 ||
    productPrice.value.length === 0 ||
    productCondition.value.length === 0 ||
    productCategory.value.length === 0 ||
    productDescription.value.length === 0
  ) {
    handleValidationMessage("Please Fill All Inputs");
    return true;
  } else {
    {
      return false;
    }
  }
}

/** Handle Search */

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
                <td class=" border-start border-end">
                <div class=" d-flex gap-1 ">
                <button onclick="onDeleteProductClick(${allProductsArr.indexOf(
                  allProductsArr[i]
                )})" class="btn btn-outline-danger"><i class="fa-solid fa-trash fs-4"></i></button>
                <button onclick="onUpdateProductClick(${allProductsArr.indexOf(
                  allProductsArr[i]
                )})" class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square fs-4"></i></button>
                </div>
                </td>
              </tr>
    `;
    }
  }
  productsContainer.innerHTML = productContainerHolder;
}
