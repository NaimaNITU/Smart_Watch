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

// like previous doing it by function for wrist size
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
// quantity
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
let cartItems = [];
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

    // now to show data dynamically in modal
    // selected band color btn for watch
    const bandColorBtn = document.querySelector("button.ringBtnBorder.w-6");
    // then for modal we need to select color
    const bandColor = bandColorBtn.id.split("-")[0];
    // now band img
    const bandImg = bandColor + ".png";
    // then for modal we need to select wrist size
    const wristSizeBtn = document.querySelector(
      "button.ringBtnBorder:not(.w-6)"
    );
    // now wristSize id="size-M"
    const wristSize = wristSizeBtn.id.split("-")[1];
    // now we need to get price based on wrist size  M $79
    const wristSizePrice = wristSizeBtn.innerText.split(" ")[1].split("$")[1];

    // now push in the array by making object
    cartItems.push({
      image: bandImg,
      title: "Classy Modern Smart Watch",
      color: bandColor,
      size: wristSize,
      quantity: quantity,
      price: quantity * parseInt(wristSizePrice),
    });
    // console.log(cartItems);
  } else {
    alert("Please select a quantity!");
  }
});

document.getElementById("checkout-btn").addEventListener("click", function () {
  const productBase = "./assets/";
  document.getElementById("cart-modal").classList.remove("hidden");
  const cartItemsContainer = document.getElementById("cart-items");
  // console.log(cartItemsContainer);
  for (const cartItem of cartItems) {
    const tr = document.createElement("tr");
    const styles = ["text-left", "border-b"];
    tr.classList.add(...styles);
    tr.innerHTML = `

     <td class="py-2">
      <div class="flex gap-3 items-center mr-10">
        <img class="h-12 w-12 object-cover rounded-md" src="${productBase}${cartItem.image}" alt=""/>
        <h1 class="font-semibold">${cartItem.title}</h1>
      </div>
    </td>
    <td class="px-4">${cartItem.color}</td>
    <td class="px-4">${cartItem.size}</td>
    <td class="px-4">${cartItem.quantity}</td>
    <td class="px-4">$${cartItem.price}</td>
    `;
    cartItemsContainer.appendChild(tr);
  }

  // now to add total in modal table
  let totalQuantity = 0;
  let totalPrice = 0;
  for (let item of cartItems) {
    totalQuantity += item.quantity;
    totalPrice += item.price;
  }
  const tr2 = document.createElement("tr");
  tr2.innerHTML = `
  <td colspan="3" class="font-semibold">Total</td>
  <td class="px-4">${totalQuantity}</td>
  <td class="px-4">$${totalPrice}</td>
  `;
  cartItemsContainer.appendChild(tr2);
});

document
  .getElementById("continue-shopping")
  .addEventListener("click", function () {
    document.getElementById("cart-modal").classList.add("hidden");
  });
document.getElementById("checkout").addEventListener("click", function () {
  alert("Proceeding ...................");
});
