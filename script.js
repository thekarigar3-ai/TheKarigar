const PRODUCTS = [
  {
    "id": 1,
    "name": "Kutch Rangoli Mirrorwork",
    "price": 2500,
    "original": 6250,
    "color": "Multicolor",
    "category": "Chaniya Choli",
    "image": "collection-01.jpg",
    "description": "A vibrant Kutch-inspired Chaniya Choli featuring colourful folk embroidery, mirrorwork-style detailing and a statement blue dupatta.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 2,
    "name": "Rangrez Patchwork Navratri Set",
    "price": 2700,
    "original": 6750,
    "color": "Black & Rust",
    "category": "Chaniya Choli",
    "image": "collection-02.jpg",
    "description": "A striking black, rust and terracotta patchwork Chaniya Choli with geometric folk motifs, perfect for Navratri nights.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 3,
    "name": "Neelam Rani Embroidered Set",
    "price": 3000,
    "original": 7500,
    "color": "Deep Teal",
    "category": "Chaniya Choli",
    "image": "collection-03.jpg",
    "description": "A graceful deep-teal festive set with a flared skirt, traditional embroidered motifs and contrasting maroon detailing.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 4,
    "name": "Peacock Lime Panel Lehenga",
    "price": 2700,
    "original": 6750,
    "color": "Lime Green",
    "category": "Chaniya Choli",
    "image": "collection-04.jpg",
    "description": "A bright lime-green lehenga with ornate peacock-inspired panels, rich black detailing and a dramatic festive silhouette.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 5,
    "name": "Satrangi Bandhani Chaniya",
    "price": 2500,
    "original": 6250,
    "color": "Multicolor",
    "category": "Chaniya Choli",
    "image": "collection-05.jpg",
    "description": "A joyful multicolour Chaniya with bandhani-inspired dotted panels and traditional border work for a classic garba look.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 6,
    "name": "Gulabi Ivory Festive Set",
    "price": 3000,
    "original": 7500,
    "color": "Ivory & Maroon",
    "category": "Chaniya Choli",
    "image": "collection-06.jpg",
    "description": "An elegant ivory and maroon ensemble with delicate metallic-style embroidery, matching blouse and a statement dupatta.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 7,
    "name": "Kaali Chandni Ruffle Set",
    "price": 2500,
    "original": 6250,
    "color": "Black & White",
    "category": "Chaniya Choli",
    "image": "collection-07.jpg",
    "description": "A bold black-and-white Chaniya Choli with layered ruffles, handcrafted-look embellishment and gold-toned border accents.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 8,
    "name": "Rangrez Folk Panel Choli",
    "price": 2700,
    "original": 6750,
    "color": "Navy & Multicolor",
    "category": "Chaniya Choli",
    "image": "collection-08.jpg",
    "description": "A colourful folk-art inspired Chaniya Choli combining navy blue with mustard, maroon, green and decorative animal motifs.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 9,
    "name": "Lal Safed Lok Kala Set",
    "price": 3000,
    "original": 7500,
    "color": "Red & Ivory",
    "category": "Chaniya Choli",
    "image": "collection-09.jpg",
    "description": "A festive red-and-ivory Chaniya Choli with bold folk-art motifs, mirror-style trim and playful multicolour tassel accents.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 10,
    "name": "Indigo Ajrakh Royale",
    "price": 3000,
    "original": 7500,
    "color": "Indigo & Ivory",
    "category": "Chaniya Choli",
    "image": "collection-10.jpg",
    "description": "A sophisticated indigo and ivory lehenga with geometric block-print-inspired motifs, ornate borders and a flowing matching dupatta.",
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ]
  },
  {
    "id": 11,
    "name": "Madhubani Magic",
    "price": 2700,
    "original": 6750,
    "color": "Pink",
    "category": "Chaniya Choli",
    "image": "collection-11.jpg"
  },
  {
    "id": 12,
    "name": "Leheriya Luxe",
    "price": 3000,
    "original": 7500,
    "color": "Green",
    "category": "Chaniya Choli",
    "image": "collection-12.jpg"
  },
  {
    "id": 13,
    "name": "Mewar Moti",
    "price": 2500,
    "original": 6250,
    "color": "Maroon",
    "category": "Chaniya Choli",
    "image": "collection-13.jpg"
  },
  {
    "id": 14,
    "name": "Sheesh Mahal",
    "price": 2700,
    "original": 6750,
    "color": "Orange",
    "category": "Chaniya Choli",
    "image": "collection-14.jpg"
  },
  {
    "id": 15,
    "name": "Kundan Koyal",
    "price": 3000,
    "original": 7500,
    "color": "Red",
    "category": "Chaniya Choli",
    "image": "collection-15.jpg"
  },
  {
    "id": 16,
    "name": "Phoolkari Pink",
    "price": 2500,
    "original": 6250,
    "color": "Purple",
    "category": "Chaniya Choli",
    "image": "collection-16.jpg"
  },
  {
    "id": 17,
    "name": "Jharna Green",
    "price": 2700,
    "original": 6750,
    "color": "Blue",
    "category": "Chaniya Choli",
    "image": "collection-17.jpg"
  },
  {
    "id": 18,
    "name": "Sunehri Sitara",
    "price": 3000,
    "original": 7500,
    "color": "Yellow",
    "category": "Chaniya Choli",
    "image": "collection-18.jpg"
  },
  {
    "id": 19,
    "name": "Rangoli Red",
    "price": 2500,
    "original": 6250,
    "color": "Wine",
    "category": "Chaniya Choli",
    "image": "collection-19.jpg"
  },
  {
    "id": 20,
    "name": "Pichwai Pearl",
    "price": 2700,
    "original": 6750,
    "color": "Teal",
    "category": "Chaniya Choli",
    "image": "collection-20.jpg"
  },
  {
    "id": 21,
    "name": "Mogra Mist",
    "price": 3000,
    "original": 7500,
    "color": "Pink",
    "category": "Chaniya Choli",
    "image": "collection-21.jpg"
  },
  {
    "id": 22,
    "name": "Rajputana Rose",
    "price": 2500,
    "original": 6250,
    "color": "Green",
    "category": "Chaniya Choli",
    "image": "collection-22.jpg"
  },
  {
    "id": 23,
    "name": "Peacock Palace",
    "price": 2700,
    "original": 6750,
    "color": "Maroon",
    "category": "Chaniya Choli",
    "image": "collection-23.jpg"
  },
  {
    "id": 24,
    "name": "Gulabi Gota",
    "price": 3000,
    "original": 7500,
    "color": "Orange",
    "category": "Chaniya Choli",
    "image": "collection-24.jpg"
  },
  {
    "id": 25,
    "name": "Kesari Kundan",
    "price": 2500,
    "original": 6250,
    "color": "Red",
    "category": "Chaniya Choli",
    "image": "collection-25.jpg"
  },
  {
    "id": 26,
    "name": "Chitramani",
    "price": 2700,
    "original": 6750,
    "color": "Purple",
    "category": "Chaniya Choli",
    "image": "collection-26.jpg"
  },
  {
    "id": 27,
    "name": "Udaipur Utsav",
    "price": 3000,
    "original": 7500,
    "color": "Blue",
    "category": "Chaniya Choli",
    "image": "collection-27.jpg"
  },
  {
    "id": 28,
    "name": "Banjara Belle",
    "price": 2500,
    "original": 6250,
    "color": "Yellow",
    "category": "Chaniya Choli",
    "image": "collection-28.jpg"
  },
  {
    "id": 29,
    "name": "Meena Bazaar",
    "price": 2700,
    "original": 6750,
    "color": "Wine",
    "category": "Chaniya Choli",
    "image": "collection-29.jpg"
  },
  {
    "id": 30,
    "name": "Shahi Shagun",
    "price": 3000,
    "original": 7500,
    "color": "Teal",
    "category": "Chaniya Choli",
    "image": "collection-30.jpg"
  },
  {
    "id": 31,
    "name": "Marigold Mirror",
    "price": 2500,
    "original": 6250,
    "color": "Pink",
    "category": "Chaniya Choli",
    "image": "collection-31.jpg"
  },
  {
    "id": 32,
    "name": "Rasiya Red",
    "price": 2700,
    "original": 6750,
    "color": "Green",
    "category": "Chaniya Choli",
    "image": "collection-32.jpg"
  },
  {
    "id": 33,
    "name": "Neelam Noor",
    "price": 3000,
    "original": 7500,
    "color": "Maroon",
    "category": "Chaniya Choli",
    "image": "collection-33.jpg"
  },
  {
    "id": 34,
    "name": "Zari Zoya",
    "price": 2500,
    "original": 6250,
    "color": "Orange",
    "category": "Chaniya Choli",
    "image": "collection-34.jpg"
  },
  {
    "id": 35,
    "name": "Rang Mahal",
    "price": 2700,
    "original": 6750,
    "color": "Red",
    "category": "Chaniya Choli",
    "image": "collection-35.jpg"
  },
  {
    "id": 36,
    "name": "Ghoomar Gold",
    "price": 3000,
    "original": 7500,
    "color": "Purple",
    "category": "Chaniya Choli",
    "image": "collection-36.jpg"
  },
  {
    "id": 37,
    "name": "Dholi Dhun",
    "price": 2500,
    "original": 6250,
    "color": "Blue",
    "category": "Chaniya Choli",
    "image": "collection-37.jpg"
  },
  {
    "id": 38,
    "name": "Kesar Kangan",
    "price": 2700,
    "original": 6750,
    "color": "Yellow",
    "category": "Chaniya Choli",
    "image": "collection-38.jpg"
  },
  {
    "id": 39,
    "name": "Hawa Mahal",
    "price": 3000,
    "original": 7500,
    "color": "Wine",
    "category": "Chaniya Choli",
    "image": "collection-39.jpg"
  },
  {
    "id": 40,
    "name": "Moti Meena",
    "price": 2500,
    "original": 6250,
    "color": "Teal",
    "category": "Chaniya Choli",
    "image": "collection-40.jpg"
  },
  {
    "id": 41,
    "name": "Padmini Pink",
    "price": 2700,
    "original": 6750,
    "color": "Pink",
    "category": "Chaniya Choli",
    "image": "collection-41.jpg"
  },
  {
    "id": 42,
    "name": "Jal Mahal Blue",
    "price": 3000,
    "original": 7500,
    "color": "Green",
    "category": "Chaniya Choli",
    "image": "collection-42.jpg"
  },
  {
    "id": 43,
    "name": "Gulnaar Garden",
    "price": 2500,
    "original": 6250,
    "color": "Maroon",
    "category": "Chaniya Choli",
    "image": "collection-43.jpg"
  },
  {
    "id": 44,
    "name": "Rajsi Riwaaz",
    "price": 2700,
    "original": 6750,
    "color": "Orange",
    "category": "Chaniya Choli",
    "image": "collection-44.jpg"
  },
  {
    "id": 45,
    "name": "Satrangi Sitara",
    "price": 3000,
    "original": 7500,
    "color": "Red",
    "category": "Chaniya Choli",
    "image": "collection-45.jpg"
  },
  {
    "id": 46,
    "name": "Chakri Chanderi",
    "price": 2500,
    "original": 6250,
    "color": "Purple",
    "category": "Chaniya Choli",
    "image": "collection-46.jpg"
  },
  {
    "id": 47,
    "name": "Gulabo Gota",
    "price": 2700,
    "original": 6750,
    "color": "Blue",
    "category": "Chaniya Choli",
    "image": "collection-47.jpg"
  },
  {
    "id": 48,
    "name": "Rajasthani Raas",
    "price": 3000,
    "original": 7500,
    "color": "Yellow",
    "category": "Chaniya Choli",
    "image": "collection-48.jpg"
  },
  {
    "id": 49,
    "name": "Adaa Anarkali",
    "price": 2500,
    "original": 6250,
    "color": "Wine",
    "category": "Chaniya Choli",
    "image": "collection-49.jpg"
  },
  {
    "id": 50,
    "name": "Koyal Kundan",
    "price": 2700,
    "original": 6750,
    "color": "Teal",
    "category": "Chaniya Choli",
    "image": "collection-50.jpg"
  }
];

const WHATSAPP = "917413902258";
let cart = [];
let visible = 12;
let filtered = [...PRODUCTS];

const $ = (s) => document.querySelector(s);
const grid = $("#productGrid");

function money(n){ return "₹" + n.toLocaleString("en-IN"); }

function renderProducts(){
  const items = filtered.slice(0, visible);
  grid.innerHTML = items.map(p => `
    <article class="product">
      <div class="product-img">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="badge">60% OFF</span>
        <button class="heart" onclick="showToast('Saved for later ♡')" aria-label="Save ${p.name}">♡</button>
      </div>
      <div class="product-info">
        <h3>${p.name}</h3>
        <div class="product-meta"><span>${p.color} • ${p.category}</span><span>#${String(p.id).padStart(2,"0")}</span></div>
        <div class="price-row"><span class="price">${money(p.price)}</span><span class="old">${money(p.original)}</span><span class="discount">-60%</span></div>
        <div class="product-actions">
          <button onclick="openProduct(${p.id})">Order</button>
          <button class="order" onclick="addToCart(${p.id})">Add to Bag</button>
        </div>
      </div>
    </article>
  `).join("");
  $("#resultCount").textContent = `${filtered.length} design${filtered.length===1?"":"s"}`;
  $("#loadMore").style.display = visible < filtered.length ? "block" : "none";
}

function applyFilters(){
  const q = $("#searchInput").value.toLowerCase().trim();
  const price = $("#priceFilter").value;
  filtered = PRODUCTS.filter(p =>
    (!q || `${p.name} ${p.color} ${p.category}`.toLowerCase().includes(q)) &&
    (price === "all" || String(p.price) === price)
  );
  visible = 12;
  renderProducts();
}

function openProduct(id){
  const p = PRODUCTS.find(x=>x.id===id);
  $("#modalContent").innerHTML = `
    <div class="product-detail">
      <img src="${p.image}" alt="${p.name}">
      <div>
        <p class="eyebrow">COLLECTION #${String(p.id).padStart(2,"0")}</p>
        <h2>${p.name}</h2>
        <div class="price-row"><span class="detail-price">${money(p.price)}</span><span class="old">${money(p.original)}</span><span class="discount">60% OFF</span></div>
        <p class="detail-copy">${p.description || "A festive Chaniya Choli from The Karigar collection, designed for celebration nights."}</p>
        <p><strong>Colour:</strong> ${p.color}</p>
        <p><strong>Available sizes:</strong> ${p.sizes ? p.sizes.join(", ") : "XS–XXL"} <span class="tiny">• Final availability confirmed on WhatsApp</span></p>
        <div class="size-row">
          ${["XS","S","M","L","XL","XXL"].map(s=>`<button class="size" onclick="selectSize(this)">${s}</button>`).join("")}
        </div>
        <button class="btn primary full" onclick="addToCart(${p.id}); closeModals();">Add to Bag</button>
        <button class="btn ghost full" style="margin-top:8px" onclick="quickWhatsApp(${p.id})">Order this on WhatsApp ↗</button>
        <p class="tiny">Final size availability, delivery and payment details are confirmed on WhatsApp.</p>
      </div>
    </div>`;
  $("#productModal").classList.add("open");
}

function selectSize(el){ document.querySelectorAll(".size").forEach(x=>x.classList.remove("active")); el.classList.add("active"); }

function addToCart(id){
  const existing = cart.find(x=>x.id===id);
  if(existing) existing.qty++;
  else cart.push({id,qty:1});
  updateCart();
  showToast("Added to your bag");
}

function updateCart(){
  $("#cartCount").textContent = cart.reduce((a,x)=>a+x.qty,0);
  const box = $("#cartItems");
  if(!cart.length){
    box.innerHTML = `<p class="muted">Your bag is empty. Add a few designs from the collection.</p>`;
    $("#cartTotal").textContent = money(0);
    return;
  }
  box.innerHTML = cart.map(item=>{
    const p=PRODUCTS.find(x=>x.id===item.id);
    return `<div class="cart-row">
      <img src="${p.image}" alt="${p.name}">
      <div><strong>${p.name}</strong><div class="tiny">${money(p.price)} each</div><button class="remove" onclick="removeFromCart(${p.id})">Remove</button></div>
      <div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${item.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div>
    </div>`
  }).join("");
  const total = cart.reduce((sum,item)=>sum + PRODUCTS.find(p=>p.id===item.id).price*item.qty,0);
  $("#cartTotal").textContent = money(total);
}

function changeQty(id,delta){
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty += delta; if(item.qty<=0) cart=cart.filter(x=>x.id!==id);
  updateCart();
}
function removeFromCart(id){cart=cart.filter(x=>x.id!==id);updateCart();}
function closeModals(){document.querySelectorAll(".modal-backdrop").forEach(x=>x.classList.remove("open"));}

function quickWhatsApp(id){
  const p=PRODUCTS.find(x=>x.id===id);
  const msg=`Hi The Karigar!%0A%0AI want to order:%0A• ${p.name} (#${String(p.id).padStart(2,"0")})%0A• Price: ${money(p.price)}%0A%0APlease confirm size, availability and delivery.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`,"_blank");
}

function sendCartToWhatsApp(){
  if(!cart.length){showToast("Your bag is empty");return;}
  let lines = cart.map(item=>{
    const p=PRODUCTS.find(x=>x.id===item.id);
    return `• ${p.name} (#${String(p.id).padStart(2,"0")}) × ${item.qty} — ${money(p.price*item.qty)}`;
  }).join("%0A");
  const total=cart.reduce((s,item)=>s+PRODUCTS.find(p=>p.id===item.id).price*item.qty,0);
  const msg=`Hi The Karigar!%0A%0AI'd like to place an order:%0A${lines}%0A%0ATotal: ${money(total)}%0A%0APlease confirm size, availability, delivery charges and payment details.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${msg}`,"_blank");
}

function showToast(text){const t=$("#toast");t.textContent=text;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}

$("#searchInput").addEventListener("input",applyFilters);
$("#priceFilter").addEventListener("change",applyFilters);
$("#loadMore").addEventListener("click",()=>{visible+=12;renderProducts()});
$("#cartBtn").addEventListener("click",()=>{$("#cartModal").classList.add("open");updateCart()});
$("#whatsappOrder").addEventListener("click",sendCartToWhatsApp);
document.querySelectorAll("[data-close]").forEach(x=>x.addEventListener("click",closeModals));
document.querySelectorAll(".modal-backdrop").forEach(x=>x.addEventListener("click",e=>{if(e.target===x)closeModals()}));
renderProducts();
updateCart();
