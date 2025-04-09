<template>
  <div class="cart-page">
    <div class="container">
      <div class="page-header">
        <h1>Shopping Cart</h1>
      </div>

      <div class="cart-empty" v-if="cart.length === 0">
        <div class="empty-cart-message">
          <span class="material-icons empty-cart-icon">shopping_cart</span>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any items to your cart yet.</p>
          <router-link to="/" class="btn">Continue Shopping</router-link>
        </div>
      </div>

      <div class="cart-content" v-else>
        <div class="cart-items">
          <div class="cart-header">
            <div class="cart-header-product">Product</div>
            <div class="cart-header-price">Price</div>
            <div class="cart-header-quantity">Quantity</div>
            <div class="cart-header-total">Total</div>
            <div class="cart-header-action"></div>
          </div>

          <CartItem
            v-for="item in cart"
            :key="item.id"
            :item="item"
          />
        </div>

        <div class="cart-summary">
          <h2>Order Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>Rs. {{ cartTotal.toLocaleString() }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>

          <div class="summary-row total">
            <span>Total</span>
            <span>Rs. {{ cartTotal.toLocaleString() }}</span>
          </div>

          <div class="summary-actions">
            <router-link to="/checkout" class="btn proceed-to-checkout">
              Proceed to Checkout
            </router-link>
            <button @click="clearCart" class="btn btn-outline clear-cart">
              Clear Cart
            </button>
          </div>

          <div class="cart-note">
            <p>Maximum order value: Rs. 50,000</p>
            <p>All prices inclusive of taxes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from '../components/CartItem.vue';

export default {
  name: 'CartPage',
  components: {
    CartItem
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal'])
  },
  methods: {
    clearCart() {
      if (confirm('Are you sure you want to clear all items from your cart?')) {
        this.$store.dispatch('clearCart');
      }
    }
  }
}
</script>

<style scoped>
.cart-page {
  padding: 40px 0;
}

.page-header {
  margin-bottom: 30px;
}

.page-header h1 {
  font-size: 32px;
  position: relative;
  padding-bottom: 15px;
}

.page-header h1:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background-color: #e60000;
}

.cart-empty {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.empty-cart-message {
  max-width: 500px;
}

.empty-cart-icon {
  font-size: 64px;
  color: #ccc;
  margin-bottom: 20px;
}

.empty-cart-message h2 {
  margin-bottom: 15px;
  font-size: 24px;
}

.empty-cart-message p {
  margin-bottom: 30px;
  color: #666;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.cart-items {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
}

.cart-header {
  display: flex;
  background-color: #f9f9f9;
  padding: 15px;
  font-weight: 600;
  border-bottom: 1px solid #eee;
}

.cart-header-product {
  flex: 2;
}

.cart-header-price, .cart-header-quantity, .cart-header-total {
  flex: 1;
  text-align: center;
}

.cart-header-action {
  width: 60px;
}

.cart-summary {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  height: fit-content;
}

.cart-summary h2 {
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 16px;
}

.summary-row.total {
  font-size: 20px;
  font-weight: 700;
  color: #e60000;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 1px solid #eee;
}

.summary-actions {
  margin-top: 30px;
}

.proceed-to-checkout, .clear-cart {
  width: 100%;
  margin-bottom: 10px;
}

.cart-note {
  margin-top: 20px;
  font-size: 12px;
  color: #666;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-header {
    display: none;
  }
}
</style>
