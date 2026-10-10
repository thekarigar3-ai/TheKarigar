# The Karigar — Chaniya Choli Website

A responsive static e-commerce style website for **The Karigar** with:
- 50 starter Chaniya Choli products
- 60% OFF banners
- BUY 3 GET 4 promotion banner
- Prices after 60% discount: ₹2,500 / ₹2,700 / ₹3,000
- Search + price filter
- Product detail modal
- Shopping bag/cart
- Direct WhatsApp order message
- Customer review section
- Mobile responsive layout
- Easy product expansion through `script.js`

## WhatsApp
Orders are sent to: **+91 74139 02258**.

## How to add more collections
Open `script.js` and find:
```js
const PRODUCTS = [...]
```
Copy one product object and change:
- `id`
- `name`
- `price`
- `original`
- `color`
- `image`

The grid automatically supports more products.

## Important: product images
The starter version uses remote fashion images as placeholders. Replace each `image` URL with your actual Chaniya Choli product photo URL, or upload local images and use paths such as:
`images/chaniya-51.jpg`

For a real store, also replace the sample customer reviews with genuine customer reviews.

## Run locally
Simply open `index.html` in a browser, or use VS Code Live Server.

## Deploy on GitHub Pages
1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
3. Go to repository **Settings → Pages**.
4. Select the `main` branch and root folder.
5. Save and open the generated GitHub Pages URL.

No backend is required for this version because orders are initiated through WhatsApp.

## Your uploaded collection photos
The first 10 products now use the actual photos supplied in this chat:
`images/collection-01.jpg` through `images/collection-10.jpg`.

Each of these products has:
- a product name
- a description
- sale price
- original price shown for the 60% OFF presentation
- size selector (XS, S, M, L, XL, XXL)
- direct WhatsApp ordering

Replace the sample sizes with the actual sizes you stock if your inventory differs.
