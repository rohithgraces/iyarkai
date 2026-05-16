const PRODUCTS=[
{id:'rose-soap',name:'Rose Soap',cat:'Soap',weight:'110g',price:90},{id:'sandal-soap',name:'Sandal Soap',cat:'Soap',weight:'110g',price:90},{id:'hibiscus-soap',name:'Hibiscus Soap',cat:'Soap',weight:'110g',price:90},{id:'turmeric-soap',name:'Turmeric Soap',cat:'Soap',weight:'110g',price:90},{id:'vetiver-soap',name:'Vetiver Soap',cat:'Soap',weight:'110g',price:90},{id:'aloe-vera-soap',name:'Aloe Vera Soap',cat:'Soap',weight:'110g',price:90},{id:'neem-soap',name:'Neem Soap',cat:'Soap',weight:'110g',price:90},{id:'tulsi-soap',name:'Tulsi Soap',cat:'Soap',weight:'110g',price:90},{id:'charcoal-soap',name:'Charcoal Soap',cat:'Soap',weight:'110g',price:90},{id:'kumkumadi-soap',name:'Kumkumadi Soap',cat:'Soap',weight:'110g',price:90},
{id:'beetroot-soap',name:'Beetroot Soap',cat:'Soap',weight:'110g',price:90},{id:'goat-milk-soap',name:'Goat Milk Soap',cat:'Soap',weight:'110g',price:90},{id:'red-sandal-soap',name:'Red Sandal Soap',cat:'Soap',weight:'110g',price:90},
{id:'multhani-meti-soap',name:'Multhani Meti Soap',cat:'Soap',weight:'110g',price:90},{id:'sivapu-sandhana-soap',name:'Sivapu Sandhana Soap',cat:'Soap',weight:'110g',price:90},{id:'mulikai-soap',name:'Mulikai Soap',cat:'Soap',weight:'110g',price:90},
{id:'hair-oil',name:'Herbal Hair Oil',cat:'Hair Care',weight:'100g',price:150},{id:'hair-pack',name:'Herbal Hair Pack',cat:'Hair Care',weight:'100g',price:120},{id:'face-pack',name:'Herbal Face Pack',cat:'Skin Care',weight:'110g',price:150},{id:'tooth-powder',name:'Herbal Tooth Powder',cat:'Oral Care',weight:'100g',price:150},{id:'aloe-vera-gel',name:'Aloe Vera Gel',cat:'Skin Care',weight:'500g',price:250},{id:'shampoo',name:'Herbal Shampoo',cat:'Hair Care',weight:'500g',price:200},{id:'bath-powder',name:'Herbal Bath Powder',cat:'Body Care',weight:'500g',price:200}
];
const WA='https://wa.me/919842277333?text=Hello%20Iyarkai%20Vazhalai,%20I%20want%20to%20order%20your%20herbal%20products.';
function getCart(){return JSON.parse(localStorage.getItem('iv_cart')||'[]')}
function setCart(c){localStorage.setItem('iv_cart',JSON.stringify(c));updateCartBadge()}
function addToCart(id){const c=getCart();const p=PRODUCTS.find(x=>x.id===id);const i=c.findIndex(x=>x.id===id);if(i>=0)c[i].qty++;else c.push({...p,qty:1});setCart(c)}
function updateCartBadge(){document.querySelectorAll('[data-cart-count]').forEach(el=>el.textContent=getCart().reduce((a,b)=>a+b.qty,0))}
function header(active=''){return `<header class="nav"><div class="container nav-row"><a class="brand brand-wrap" href="index.html"><img src="assets/logo.jpg" alt="Iyarkai Vazhalai logo" class="brand-logo">Iyarkai Vazhalai</a><nav class="links"><a href="index.html">Home</a><a href="shop.html">Shop</a><a href="about.html">About</a><a href="contact.html">Contact</a><a href="cart.html">Cart</a><span class="badge" data-cart-count>0</span></nav></div></header>`}
function footer(){return `<footer class="footer"><div class="container grid grid-3"><div><h3>Iyarkai Vazhalai</h3><p>100% Natural Handmade Herbal Products</p></div><div><h3>Contact</h3><p>98422 77333 | 90808 38621</p><p>376A Kaveri Nagar, Ariyamangalam, Trichy - 620010, Tamil Nadu</p><p><a href="https://maps.app.goo.gl/c9DtxRa7CwwT9pwx9" target="_blank">Open in Google Maps</a></p></div><div><h3>Social</h3><div class="social-row"><a class="social-icon ig" href="https://www.instagram.com/iyarkai_vazalai" target="_blank" aria-label="Instagram">IG</a><a class="social-icon wa" href="${WA}" target="_blank" aria-label="WhatsApp">WA</a></div></div></div></footer><a class="wa-float" href="${WA}" target="_blank">WhatsApp Chat</a>`}
function productCard(p){
  const photoMap={
    'rose-soap':'assets/rose-soap.jpeg',
    'multhani-meti-soap':'assets/multhani-meti-soap.jpeg',
    'sivapu-sandhana-soap':'assets/sivapu-sandhana-soap.jpeg',
    'mulikai-soap':'assets/mulikai-soap.jpeg'
  };
  const photoHtml=photoMap[p.id]
    ? `<img src="${photoMap[p.id]}" alt="${p.name}" class="product-photo-img">`
    : `<div class="photo">Add product photo</div>`;
  return `<article class="card">${photoHtml}<h3>${p.name}</h3><p class="small">${p.weight}</p><p><b>₹${p.price}</b></p><p><button class="btn btn-primary" onclick="addToCart('${p.id}')">Add to cart</button> <a class="btn btn-outline" href="product.html?id=${p.id}">View</a></p></article>`;
}
const HERO_SLIDES=[
  {name:'Multhani Meti Soap',img:'assets/multhani-meti-soap.jpeg'},
  {name:'Sivapu Sandhana Soap',img:'assets/sivapu-sandhana-soap.jpeg'},
  {name:'Mulikai Soap',img:'assets/mulikai-soap.jpeg'}
];
