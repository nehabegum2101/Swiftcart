// ===== SINGLE PRODUCT VIEW =====
document.querySelectorAll(".pro").forEach(product => {
  product.addEventListener("click", function (e) {

    // prevent cart icon click interference
    if (e.target.closest(".add-to-cart")) return;

    const productData = {
      image: this.querySelector("img").src,
      name: this.querySelector("h5").innerText,
      price: this.querySelector("h4").innerText,
      description: "Premium quality fashion item from SwiftCart."
    };

    localStorage.setItem("singleProduct", JSON.stringify(productData));
    window.location.href = "sproduct.html";
  });
});



/*cart add*/

let cart = JSON.parse(localStorage.getItem("cart")) || [];


function updateCartCount() {
  const count = document.getElementById("count");
  if (!count) return;

  let total = 0;
  cart.forEach(item => total += item.quantity);
  count.innerText = total;
}
updateCartCount();


document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();

    const product = btn.closest(".pro");

    const item = {
      name: product.querySelector("h5").innerText,
      price: parseFloat(product.querySelector("h4").innerText.replace("$", "")),
      image: product.querySelector("img").src,
      quantity: 1
    };

    const found = cart.find(p => p.name === item.name);

    if (found) {
      found.quantity++;
    } else {
      cart.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert("Added to cart 🛒");
  });
});


const cartItems = document.getElementById("cart-items");

if (cartItems) {
  renderCart();
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    cartItems.innerHTML += `
      <tr>
        <td>
          <a href="#" onclick="removeItem(${index})">
            <i class="fa-solid fa-circle-minus" style="color:#db7093;"></i>
          </a>
        </td>
        <td><img src="${item.image}" width="70"></td>
        <td>${item.name}</td>
        <td>$${item.price}</td>
        <td>
          <input type="number" value="${item.quantity}" min="1"
                 onchange="changeQty(${index}, this.value)">
        </td>
        <td>$${subtotal}</td>
      </tr>
    `;
  });

  document.getElementById("cart-subtotal").innerText = `$${total}`;
  document.getElementById("cart-total").innerText = `$${total}`;
}


function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}


function changeQty(index, qty) {
  cart[index].quantity = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}
