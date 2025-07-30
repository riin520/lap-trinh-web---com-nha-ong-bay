// ============ DỮ LIỆU MÓN ĂN (DỄ MỞ RỘNG) ============
const menuData = [
  {
    id: 1,
    name: "Cơm chiên Dương Châu",
    price: 85000,
    img: "images/com_duongchau.jpg",
  },
  {
    id: 2,
    name: "Cơm chiên cá mặn",
    price: 99000,
    img: "images/com_camman.jpg",
  },
  {
    id: 3,
    name: "Cơm chiên hải sản",
    price: 99000,
    img: "images/com_haisan.jpg",
  },
  { id: 4, name: "Cơm trứng (thố)", price: 30000, img: "images/com_trung.jpg" },
  {
    id: 5,
    name: "Canh cua rau đay",
    price: 129000,
    img: "images/canh_cuarau.jpg",
  },
  {
    id: 6,
    name: "Canh chua cá lóc",
    price: 129000,
    img: "images/canh_chualoc.jpg",
  },
  {
    id: 7,
    name: "Canh kho qua nhồi thịt",
    price: 99000,
    img: "images/canh_khoqua.jpg",
  },
  {
    id: 8,
    name: "Canh khoai mỡ",
    price: 129000,
    img: "images/canh_khoaimo.jpg",
  },
  {
    id: 9,
    name: "Canh bí đỏ thịt bằm",
    price: 129000,
    img: "images/canh_bido.jpg",
  },
  {
    id: 10,
    name: "Cá bống kho tiêu",
    price: 129000,
    img: "images/ca_bong.jpg",
  },
  { id: 11, name: "Cá thu sốt cà", price: 109000, img: "images/ca_thu.jpg" },
];

// ============ HIỂN THỊ DANH SÁCH MÓN ============
const menuContainer = document.getElementById("menu-items");

function renderMenu() {
  menuData.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price.toLocaleString()} VND</p>
      <button onclick="addToCart(${item.id})">Chọn món</button>
    `;
    menuContainer.appendChild(div);
  });
}

// ============ GIỎ HÀNG ============
let cart = [];

function addToCart(id) {
  const item = menuData.find((menu) => menu.id === id);
  cart.push(item);
  updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const total = document.getElementById("total");

  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toLocaleString()} VND`;
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  total.textContent = totalPrice.toLocaleString();
}

// Chuyển sang trang checkout
function goToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

// Gọi hàm render menu khi load trang
renderMenu();

// ============ NAVBAR RESPONSIVE ============
document.getElementById("menu-toggle").addEventListener("click", function () {
  document.getElementById("nav-links").classList.toggle("active");
});
