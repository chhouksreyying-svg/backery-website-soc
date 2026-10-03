/* Bakery Shop — static site logic (multi-page) */

const products = [
  /* --- REGULAR MENU PRODUCTS (Shown on Home & Products Menu) --- */
  {
    slug: "cheesy garlic bread",
    name: "Cheesy Garlic Bread",
    image: "images/cake15.png",
    price: 32,
    size: 'Ø 8" · serves 8',
    toppings: "Fresh cheese, vanilla cream",
    description:
      "Bold, aromatic garlic balanced by the rich creaminess of butter and the savory, salty goodness of melted cheese.",
  },
  {
    slug: "chocolate-glazed mousse cake",
    name: "Chocolate Glazed Mousse Cake",
    image: "images/cake16.png",
    price: 48,
    size: 'Ø 8" · serves 10',
    toppings: "Ginger, cherries, rosemary",
    description:
      "A rich combination of sweet chocolate, delicate sponge, and fresh fruity notes from the strawberry and coulis accompaniment.",
  },
  {
    slug: "mille-feuille",
    name: "Mille feuille",
    image: "images/cake14.png",
    price: 22,
    size: 'Ø 8" · serves 8',
    toppings: "Fresh strawberries, vanilla cream",
    description:
      "Sweet, buttery, and deeply aromatic with vanilla, balanced by the rich richness of the cream and the delicate crunch of caramelized pastry.",
  },
  {
    slug: "macarons",
    name: "Macarons",
    image: "images/cake13.png",
    price: 12,
    size: "12 pieces",
    toppings: "Assorted flavors",
    description:
      "Sweet, nutty from the almond flour, and perfectly complemented by the creamy, flavorful center.",
  },
  {
    slug: "strawberry-cake",
    name: "Strawberry Cake",
    image: "images/strawberry.png",
    price: 32,
    size: 'Ø 8" · serves 8',
    toppings: "Fresh strawberries, vanilla cream",
    description:
      "Whether it's a birthday, a quiet afternoon treat, or a grand celebration, our artisanal cakes are designed to make your special occasions taste and look extraordinary.",
  },
  {
    slug: "gingerbread-village-cake",
    name: "Gingerbread Village Cake",
    image: "images/gingerbread.png",
    price: 48,
    size: 'Ø 8" · serves 10',
    toppings: "Gingerbread houses, cherries, rosemary",
    description:
      "Looking for something unique? From whimsical holiday themes to elegant custom celebration cakes, we bring your vision to life with meticulous attention to detail.",
  },
  {
    slug: "chocolate-drip-cake",
    name: "Chocolate Drip Cake",
    image: "images/chocolate-drip.png",
    price: 55,
    size: "Two tiers · serves 16",
    toppings: "Chocolate glaze, cookies, pretzels",
    description:
      "Rich, layered chocolate perfection finished with a decadent glaze and custom details. Every slice is designed to make your milestone moments unforgettable.",
  },
  {
    slug: "red-velvet-dream-cupcake",
    name: "Red Velvet Dream Cupcake",
    image: "images/red-velvet-cupcake.png",
    price: 6,
    size: "Single cupcake",
    toppings: "Cream cheese frosting, macaron",
    description:
      "A decadent red velvet classic crowned with rich cream cheese frosting and an exquisite macaron. The ultimate sweet treat to elevate your day.",
  },
  {
    slug: "red-velvet-layer-cake",
    name: "Red Velvet Layer Cake",
    image: "images/red-velvet-cake.png",
    price: 38,
    size: 'Ø 7" · serves 8',
    toppings: "Fresh raspberries, mascarpone",
    description:
      "Velvety crumb layered with airy mascarpone and finished with fresh raspberries. Soft, tangy and just sweet enough for any celebration.",
  },
  {
    slug: "raspberry-cream-tart",
    name: "Raspberry Cream Tart",
    image: "images/raspberry-tart.png",
    price: 34,
    size: 'Ø 9" · serves 10',
    toppings: "Raspberries, vanilla chantilly",
    description:
      "A buttery almond base piled high with vanilla chantilly and a mountain of ruby raspberries. Bright, fresh and beautifully rustic.",
  },
  {
    slug: "cheesecake-selection",
    name: "Cheesecake Selection",
    image: "images/cheesecake.png",
    price: 24,
    size: "4 slices, assorted",
    toppings: "Mango, berries, chocolate",
    description:
      "A curated plate of our best-loved cheesecake slices — silky, light and topped with seasonal fruit and chocolate.",
  },
  {
    slug: "classic-tiramisu-cake",
    name: "Classic Tiramisu Cake",
    image: "images/tiramisu.png",
    price: 40,
    size: 'Ø 8" · serves 10',
    toppings: "Cocoa dust, ladyfingers, espresso cream",
    description:
      "Espresso-soaked sponge and mascarpone cream, dusted with cocoa and wrapped in ladyfingers. A timeless finish to any meal.",
  },
  {
    slug: "croissant",
    name: "Butter Croissant",
    image: "images/croissant.png",
    price: 4,
    size: "1 piece",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },
  {
    slug: "carrot cake",
    name: "Carrot Cake",
    image: "images/cake17.png",
    price: 35,
    size: 'Ø 8" · serves 10',
    toppings: "Cream cheese frosting, walnuts",
    description:
      "Wonderfully moist and tender crumb paired with a creamy frosting and a crunchy nut topping.",
  },
  {
    slug: "homemade cake pops",
    name: "Homemade Cake Pops",
    image: "images/cake18.png",
    price: 4,
    size: "1",
    toppings: "Butter glaze",
    description: "Flaky, golden-brown butter croissant baked fresh daily.",
  },

  /* --- SPECIAL ORDERS ONLY --- */
  {
    slug: "cuteis-cake",
    name: "Cuteis Cake",
    image: "images/cake2.png",
    price: 45,
    size: 'Ø 8" · serves 10',
    toppings: "Pastel frosting & custom decor",
    description: "A charming custom creation designed exclusively for special requests and themed celebrations.",
    specialOnly: true,
  },
  {
    slug: "strawberry-special",
    name: "Strawberry Cake",
    image: "images/cake3.png",
    price: 50,
    size: 'Ø 8" · serves 10',
    toppings: "Fresh strawberry display",
    description: "An extravagant custom strawberry display tailored for your most memorable milestone events.",
    specialOnly: true,
  },
  {
    slug: "cherry-cake",
    name: "Cherry Cake",
    image: "images/cake5.png",
    price: 55,
    size: 'Ø 9" · serves 12',
    toppings: "Cascade of cherries",
    description: "A stunning multi-tiered custom cherry cake designed to captivate your guests.",
    specialOnly: true,
  },
  {
    slug: "chocolate-cake",
    name: "Chocolate Cake",
    image: "images/cake7.png",
    price: 60,
    size: 'Ø 9" · serves 12',
    toppings: "Luxury chocolate decor",
    description: "An artisanal chocolate masterpiece crafted to order for high-end celebrations.",
    specialOnly: true,
  },
  {
    slug: "green-cake",
    name: "Green Cake",
    image: "images/cake8.png",
    price: 48,
    size: 'Ø 8" · serves 10',
    toppings: "Detailed piping & glaze",
    description: "A bespoke custom green-themed cake crafted with meticulous artistry for special orders.",
    specialOnly: true,
  },
  {
    slug: "white-rose-cake-pink-red",
    name: "White Rose Cake Pink Red",
    image: "images/cake10.png",
    price: 65,
    size: 'Two tiers · serves 14',
    toppings: "Handmade sugar roses",
    description: "An exquisite custom rose cake designed exclusively for weddings and grand romantic events.",
    specialOnly: true,
  },
  {
    slug: "golden-celebration-cake",
    name: "Golden Celebration Cake",
    image: "images/cake11.png",
    price: 70,
    size: "Two tiers · serves 15",
    toppings: "Gold leaf accents, vanilla cream",
    description: "An opulent custom cake adorned with edible gold leaf for extraordinary celebrations.",
    specialOnly: true,
  },
  {
    slug: "blueberry-fantasy-cake",
    name: "Blueberry Fantasy Cake",
    image: "images/cake12.png",
    price: 52,
    size: 'Ø 8" · serves 10',
    toppings: "Fresh blueberries, lemon glaze",
    description: "A delightful custom creation layered with fresh plump blueberries and zesty lemon curd.",
    specialOnly: true,
  },
];

/* Image Path Helper */
function getImagePath(imgPath) {
  const isInHtmlFolder = window.location.pathname.includes('/html/');
  return isInHtmlFolder ? `../${imgPath}` : imgPath;
}

function productURL(p) {
  const isInHtmlFolder = window.location.pathname.includes('/html/');
  return isInHtmlFolder ? `product.html?slug=${p.slug}` : `html/product.html?slug=${p.slug}`;
}

function simpleCardHTML(p, priceLabel) {
  return `
    <a class="card" href="${productURL(p)}">
      <img src="${getImagePath(p.image)}" alt="${p.name}" loading="lazy" />
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${priceLabel}</p>
      </div>
    </a>`;
}

function renderFeatured() {
  const el = document.getElementById("featured-grid");
  if (el) {
    el.innerHTML = products
      .filter((p) => !p.specialOnly)
      .slice(0, 4)
      .map((p) => simpleCardHTML(p, `$${p.price} · ${p.size}`))
      .join("");
  }
}

function renderSpecialOrders() {
  const el = document.getElementById("special-grid");
  if (el) {
    el.innerHTML = products
      .filter((p) => p.specialOnly)
      .map((p) => simpleCardHTML(p, `from $${p.price}`))
      .join("");
  }
}

function renderMenu() {
  const el = document.getElementById("menu-grid");
  if (el) {
    el.innerHTML = products
      .filter((p) => !p.specialOnly)
      .map(
        (p) => `
      <article class="menu-card">
        <img src="${getImagePath(p.image)}" alt="${p.name}" loading="lazy" />
        <div class="menu-overlay">
          <div>
            <h2>${p.name}</h2>
            <p class="desc">${p.description}</p>
          </div>
          <div>
            <div class="menu-row"><span>Price</span><span>$${p.price}</span></div>
            <div class="menu-row small"><span>Size</span><span>${p.size}</span></div>
            <a class="menu-order" href="${productURL(p)}">Order</a>
          </div>
        </div>
      </article>`
      )
      .join("");
  }
}

function renderProductDetail() {
  const slug = new URLSearchParams(location.search).get("slug");
  const p = products.find((x) => x.slug === slug) || products[0];
  if (!p) return;
  
  document.title = `${p.name} — Bakery Shop`;
  const imgEl = document.getElementById("p-image");
  if (imgEl) {
    imgEl.src = getImagePath(p.image);
    imgEl.alt = p.name;
  }
  if (document.getElementById("p-name")) document.getElementById("p-name").textContent = p.name;
  if (document.getElementById("p-description")) document.getElementById("p-description").textContent = p.description;
  if (document.getElementById("p-price")) document.getElementById("p-price").textContent = `$${p.price}`;
  if (document.getElementById("p-size")) document.getElementById("p-size").textContent = p.size;
  if (document.getElementById("p-toppings")) document.getElementById("p-toppings").textContent = p.toppings;
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const isInHtmlFolder = window.location.pathname.includes('/html/');
      location.href = isInHtmlFolder ? "submit-confirmed.html" : "html/submit-confirmed.html";
    });
  }
}

/* --- Cart Logic --- */
function getCart() {
  return JSON.parse(localStorage.getItem('bakery_cart') || '[]');
}

function saveCart(cart) {
  localStorage.setItem('bakery_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(slug) {
  const cart = getCart();
  const existing = cart.find(item => item.slug === slug);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ slug: slug, quantity: 1 });
  }
  saveCart(cart);
  alert("Item added to your cart!");
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelectorAll('.cart-count').forEach(el => el.textContent = count);
}

function updateQuantity(slug, delta) {
  let cart = getCart();
  const item = cart.find(i => i.slug === slug);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.slug !== slug);
    }
  }
  saveCart(cart);
  renderCart();
}

function removeFromCart(slug) {
  let cart = getCart();
  cart = cart.filter(i => i.slug !== slug);
  saveCart(cart);
  renderCart();
}

function renderCart() {
  const cart = getCart();
  const container = document.getElementById('cart-items-container');
  const summaryContainer = document.getElementById('cart-summary');
  if (!container) return;

  const isInHtmlFolder = window.location.pathname.includes('/html/');
  const menuLink = isInHtmlFolder ? "products.html" : "html/products.html";

  if (cart.length === 0) {
    container.innerHTML = `<p class="body-text" style="text-align:center; margin: 40px 0;">Your cart is empty. <a href="${menuLink}" style="color:var(--primary); font-weight:bold;">Browse our menu</a> to add delicious treats!</p>`;
    if (summaryContainer) summaryContainer.style.display = 'none';
    return;
  }

  if (summaryContainer) summaryContainer.style.display = 'block';
  
  let total = 0;
  let itemsHTML = '<div class="cart-list" style="display: flex; flex-direction: column; gap: 16px;">';

  cart.forEach(item => {
    const product = products.find(p => p.slug === item.slug);
    if (!product) return;
    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    itemsHTML += `
      <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; background: #fff; padding: 16px; border-radius: 12px; border: 1px solid var(--border); gap: 16px;">
        <img src="${getImagePath(product.image)}" alt="${product.name}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;" />
        <div style="flex: 1;">
          <h3 style="font-size: 16px; margin: 0;">${product.name}</h3>
          <p style="font-size: 14px; color: var(--muted-foreground); margin: 0;">$${product.price} each</p>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button onclick="updateQuantity('${product.slug}', -1)" class="btn btn-outline" style="padding: 4px 10px; font-size: 14px;">-</button>
          <span style="font-weight: bold; min-width: 20px; text-align: center;">${item.quantity}</span>
          <button onclick="updateQuantity('${product.slug}', 1)" class="btn btn-outline" style="padding: 4px 10px; font-size: 14px;">+</button>
        </div>
        <div style="font-weight: bold; min-width: 60px; text-align: right;">$${itemTotal}</div>
        <button onclick="removeFromCart('${product.slug}')" style="background: none; border: none; color: #e07a84; cursor: pointer; font-size: 20px;"><i class='bx bx-trash'></i></button>
      </div>
    `;
  });

  itemsHTML += '</div>';
  container.innerHTML = itemsHTML;

  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  if (subtotalEl) subtotalEl.textContent = `$${total}`;
  if (totalEl) totalEl.textContent = `$${total}`;
}

function processCheckout(e) {
  e.preventDefault();
  const orderId = Math.floor(10000 + Math.random() * 90000);
  localStorage.removeItem('bakery_cart');
  const isInHtmlFolder = window.location.pathname.includes('/html/');
  window.location.href = isInHtmlFolder ? `order-confirmed.html?id=${orderId}` : `html/order-confirmed.html?id=${orderId}`;
}

/* Initialization on page load */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  renderFeatured();
  renderSpecialOrders();
  renderMenu();
  renderProductDetail();
  setupContactForm();
  renderCart();
});