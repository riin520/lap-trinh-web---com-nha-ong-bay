// ============ DỮ LIỆU MÓN ĂN (DỄ MỞ RỘNG) ============
const menuData = [
  {
    id: 1,
    name: "Cơm chiên Dương Châu",
    price: 85000,
    img: "./img/img-monan/comchienduongchau.png",
  },
  {
    id: 2,
    name: "Cơm chiên cá mặn",
    price: 99000,
    img: "./img/img-monan/comchiencaman.png",
  },
  {
    id: 3,
    name: "Cơm chiên hải sản",
    price: 99000,
    img: "./img/img-monan/comchienhaisan.png",
  },
  {
    id: 4,
    name: "Cơm trắng (thố)",
    price: 30000,
    img: "./img/img-monan/comtrang.png",
  },
  {
    id: 5,
    name: "Canh cua rau đay",
    price: 129000,
    img: "./img/img-monan/canh-cua-rau-day.png",
  },
  {
    id: 6,
    name: "Canh chua cá lóc",
    price: 129000,
    img: "./img/img-monan/canhchuacaloc.png",
  },
  {
    id: 7,
    name: "Canh khổ qua nhồi thịt",
    price: 99000,
    img: "./img/img-monan/canhkhoquanhoithit.png",
  },
  {
    id: 8,
    name: "Canh khoai mỡ",
    price: 129000,
    img: "./img/img-monan/canhkhoaimo.png",
  },
  {
    id: 9,
    name: "Canh bí đỏ thịt bằm",
    price: 129000,
    img: "./img/img-monan/canhbido.png",
  },
  {
    id: 10,
    name: "Cá bống kho tiêu",
    price: 129000,
    img: "./img/img-monan/cabongkhotieu.png",
  },
  {
    id: 11,
    name: "Cá thu sốt cà",
    price: 109000,
    img: "./img/img-monan/cathusotca.png",
  },
  {
    id: 12,
    name: "Cá diêu hồng chiên xù",
    price: 109000,
    img: "./img/img-monan/cadieuhongchien.png",
  },
  {
    id: 13,
    name: "chả cá thác lác chiên thì là",
    price: 109000,
    img: "./img/img-monan/thaclachien.png",
  },
  {
    id: 14,
    name: "thịt kho tiêu",
    price: 109000,
    img: "./img/img-monan/thitkhotieu.png",
  },
  {
    id: 15,
    name: "thịt luộc cà pháo",
    price: 109000,
    img: "./img/img-monan/thitluoccaphao.png",
  },
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
