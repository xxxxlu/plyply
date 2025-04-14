<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <router-link to="/" class="logo">
          <h1>PLY PLY</h1>
        </router-link>
        <nav class="main-nav">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
            <li class="cart-icon">
              <router-link to="/cart">
                <span class="material-icons">shopping_cart</span>
                <span class="cart-count" v-if="cartItemCount > 0">{{ cartItemCount }}</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view/>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>PLY PLY</h3>
            <p>Your one-stop shop for authentic Pakistani snacks and treats.</p>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/cart">Cart</router-link></li>
              <li><router-link to="/contact">Contact Us</router-link></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Payment Options</h3>
            <div class="payment-icons">
              <img src="/images/easypay.png" alt="EasyPaisa" class="payment-icon">
              <img src="/images/jazzcash.png" alt="JazzCash" class="payment-icon">
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>Copyright © 2025 PLY PLY Store. Powered by Data Tech Solutions (SMC-Private) Limited</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapGetters(['cartItemCount'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header styles */
.header {
  background-color: #e60000;
  color: white;
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  text-decoration: none;
  color: white;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
  align-items: center;
}

.main-nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.main-nav a:hover {
  color: #ffd700;
}

.cart-icon {
  position: relative;
}

.cart-icon .material-icons {
  font-size: 24px;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ffd700;
  color: #e60000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

/* Main content */
.main-content {
  flex: 1;
  padding: 30px 0;
}

/* Footer styles */
.footer {
  background-color: #333;
  color: white;
  padding: 40px 0 20px;
  margin-top: auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section {
  flex: 1;
  min-width: 250px;
}

.footer-section h3 {
  color: #ffffff;
  margin-bottom: 15px;
  font-size: 18px;
  position: relative;
}

.footer-section h3:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 2px;
  background-color: #e60000;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #e60000;
}

.payment-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.payment-icon {
  height: 30px;
  width: auto;
}

.copyright {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
  color: #aaa;
  font-size: 14px;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #e60000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #cc0000;
}

.btn:disabled {
  background-color: #999;
  cursor: not-allowed;
}

.btn-outline {
  background-color: transparent;
  border: 1px solid #e60000;
  color: #e60000;
}

.btn-outline:hover {
  background-color: #e60000;
  color: white;
}

/* Form styles */
.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #e60000;
}
</style>
