
const order = JSON.parse(localStorage.getItem("userOrder"));
const display = document.getElementById("orderDisplay");
const imageBox = document.getElementById("orderImage");

const coffeeImages = {
  "hot": "espresso.jpg",
  "clod": "cold brew.jpg",
  "dessert": "affogato.jpg",
  "brewing": "cortado.jpg"
};

if (order) {
  const imageName = coffeeImages[order.coffee.toLowerCase()] || "default-coffee.jpg";

  imageBox.innerHTML = `
    <img src="${imageName}" alt="${order.coffee}" class="coffee-image" />
  `;

  display.innerHTML = `
    <p><strong>👤 Name:</strong> ${order.name}</p>
    <p><strong>📧 Email:</strong> ${order.email}</p>
    <p><strong>☕ Coffee Type:</strong> ${order.coffee}</p>
    <p><strong>📝 Message:</strong> ${order.message || "None"}</p>
    <p><strong>⏰ Ordered On:</strong> ${order.time}</p>
  `;
} else {
  display.innerHTML = "<p style='color:#f7b267;'>No order found. Please place an order first!</p>";
}

function clearOrder() {
  localStorage.removeItem("userOrder");
  alert("Your order has been cleared.");
  location.reload();
}

function goToHome() {
  window.location.href = "index.html"; 
}
