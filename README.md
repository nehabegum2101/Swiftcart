
# 🛒 SwiftCart – Modern E-Commerce Website
SwiftCart is a modern, responsive e-commerce web application built using **HTML, CSS, and JavaScript**, designed to simulate a real online shopping experience.
It includes product browsing, cart management, Google authentication, and **Razorpay test-mode payments**

🚀 Live Demo

🔗 **Website:**
[https://nehabegum2101.github.io/SwiftCart/](https://nehabegum2101.github.io/SwiftCart/)

📌 Features

* 🏠 Home page with featured products & offers
* 🔍 Product search functionality
* 🛍️ Product listing & shopping cart
* ➕ Add / remove items from cart
* 💳 Razorpay **test-mode** payment integration
* 📦 Order history page (stored locally)
* 🔐 Google Login using Firebase Authentication
* 📱 Fully responsive design
* 🔒 Secure HTTPS deployment via GitHub Pages

 🧑‍💻 Technologies Used

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
* **Authentication:** Firebase Google Auth
* **Payments:** Razorpay (Test Mode)
* **Storage:** Browser LocalStorage
* **Icons:** Font Awesome
* **Hosting:** GitHub Pages

## 📂 Project Structure

```
SwiftCart/
│
├── index.html          # Home page
├── shop.html           # Product listing
├── cart.html           # Cart & checkout
├── orders.html         # Order history
├── about.html
├── contact.html
├── payment.html
├── script.js           # Main JavaScript logic
├── style.css           # Styling
├── images/             # Product & UI images
└── README.md
```

## 💳 Razorpay Payment (Test Mode)

SwiftCart uses **Razorpay Test Mode**, so **no real money or bank details are required**.

### ✔️ Test UPI Details

success@razorpay

⚠️ **Note:**
This project does NOT process real payments and is intended for educational purposes only.

 🔐 Google Login (Firebase)

* Google Sign-In using Firebase Authentication
* User login state handled on the frontend
* Login required to access Orders page

> Firebase configuration is already added in the project.

---

 📦 Order Management

* Orders are stored in **LocalStorage**
* After successful payment:

  * Cart is cleared
  * Order is saved
  * User is redirected to `orders.html`

---

🌐 Deployment

This project is deployed using **GitHub Pages**.
