// Lấy dữ liệu giỏ hàng từ localStorage
const cartData = JSON.parse(localStorage.getItem("cart")) || [];
const orderSummary = document.getElementById("checkout-list");

function renderCheckout() {
  if (cartData.length === 0) {
    orderSummary.innerHTML = "<p>Không có món nào trong đơn hàng.</p>";
    return;
  }

  let totalPrice = 0;
  orderSummary.innerHTML = "";

  cartData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>${item.price.toLocaleString()} VND</span>
    `;
    orderSummary.appendChild(div);
    totalPrice += item.price;
  });

  // Tổng cộng
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("order-total");
  totalDiv.textContent = `Tổng cộng: ${totalPrice.toLocaleString()} VND`;
  orderSummary.appendChild(totalDiv);
}

// Xử lý form khách hàng
document
  .getElementById("customer-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customer-name").value.trim();
    const phone = document.getElementById("customer-phone").value.trim();
    const address = document.getElementById("customer-address").value.trim();
    const payment = document.getElementById("payment-method").value;

    if (!name || !phone || !address) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    const orderId = "OD" + Math.floor(1000 + Math.random() * 9000); // Random 4 số
    const date = new Date();
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

    alert(
      `Đặt hàng thành công!\n\nMã đơn hàng: ${orderId}\nKhách hàng: ${name}\nThanh toán: ${payment}\nNgày giờ: ${dateString}\n\nCảm ơn bạn đã đặt hàng tại Cơm Nhà Ông Bảy!`
    );

    localStorage.removeItem("cart");
    window.location.href = "menu.html";
  });

// Render khi load
renderCheckout();

// Navbar responsive
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});
