// alert('vnb')

/* const weistBtns = document.querySelectorAll(".weistBtn");
for (const weistBtn of weistBtns) {
    // console.log(weistBtn);
    weistBtn.addEventListener("click", function (event) {
        for (let i = 0; i < weistBtns.length; i++) {
            weistBtns[i].classList.remove("border-red-500");
            }
            event.target.classList.add("border-red-500");
            });
            }
   */
/* const ringBtns = document.querySelectorAll(".ring-button");
for (const ringBtn of ringBtns) {
  ringBtn.addEventListener("click", function (event) {
    // id = "purple-color";
    //   id = "product-image";
    // src = "assets/purple.png";
    const color = event.target.id.replace("-color", "");

    for (let i = 0; i < ringBtns.length; i++) {
      ringBtns[i].classList.remove("ringBtnBorder");
      ringBtns[i].classList.add("border-gray-300");
    }
    event.target.classList.add("ringBtnBorder");
    event.target.classList.remove("border-gray-300");

    const productImg = document.getElementById("product-image");
    productImg.src = `./assets/${color}.png`;
  });
} */

function bandColor(color) {
  // console.log(bandColorId);
  const watchImg = document.getElementById("product-image");
  const bands = ["purple", "teal", "cyan", "gray"];
  for (const band of bands) {
    const bandColorId = document.getElementById(band + "-color");
    if (color === band) {
      bandColorId.classList.add("ringBtnBorder");
      watchImg.src = `./assets/${band}.png`;
    } else {
      bandColorId.classList.remove("ringBtnBorder");
    }
  }
}

// like previous doing it by function
function selectWristSize(size) {
  // console.log(size);
  const sizes = ["S", "M", "L", "XL"];
  for (const sizee of sizes) {
    const wristBtn = document.getElementById("size-" + sizee);
    // console.log(wristBtn);
    if (size === sizee) {
      wristBtn.classList.add("ringBtnBorder");
    } else {
      wristBtn.classList.remove("ringBtnBorder");
    }
  }
}

//quantity btn
/* const quantityBtns = document.getElementsByClassName("quantity-button");
for (let quantityBtn of quantityBtns) {
  quantityBtn.addEventListener("click", function (event) {
    const PreviousQuantity = parseInt(
      document.getElementById("quantity").innerText
    );
    const clickedAmount = event.target.innerText === "+" ? 1 : -1;
    const newQuantity = Math.max(0, PreviousQuantity + clickedAmount);
    PreviousQuantity.innerText = newQuantity;
  });
} */
const quantityBtns = document.querySelectorAll(".quantity-button");
for (let quantityBtn of quantityBtns) {
  quantityBtn.addEventListener("click", function (event) {
    const newClickAmount = event.target.innerText === "+" ? 1 : -1;
    const previousQuantity = document.getElementById("quantity");
    const previousQuantityy = parseInt(
      document.getElementById("quantity").innerText
    );
    const totalAmount = previousQuantityy + newClickAmount;
    // console.log(totalAmount);
    const newClickedQuantity = Math.max(0, totalAmount);
    previousQuantity.innerText = newClickedQuantity;
    // console.log(totalAmount);
  });
}
/* const quantityElements = document.querySelectorAll(".quantity-button");
for (let btn of quantityElements) {
  btn.addEventListener("click", function (event) {
    const amount = event.target.innerText === "+" ? 1 : -1; // 1 || -1
    const quantityEelemnt = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityEelemnt.innerText);
    const newQuantity = Math.max(0, currentQuantity + amount);
    quantityEelemnt.innerText = newQuantity;
  });
}
 */

//checkout btn
let cartCount = 0;
const checkOutContainer = document.getElementById("checkout-container");
// const cartCount = document.getElementById("cart-count");
const addToCartBtn = document.getElementById("add-to-cart");
addToCartBtn.addEventListener("click", function () {
  // checkOutContainer.style.display = "block";

  const quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity > 0) {
    checkOutContainer.classList.remove("hidden");
    cartCount = cartCount + quantity;
    document.getElementById("cart-count").innerText = cartCount;
  } else {
    alert("Please select a quantity!");
  }
});

/* const checkOutBtn = document.getElementById("checkout-btn");
checkOutBtn.addEventListener("click", function () {
  const PreviousCartCount = document.getElementById("cart-count").innerText;
}); */
