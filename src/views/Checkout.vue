<template>
  <div class="checkout-page">
    <div class="container">
      <div class="page-header">
        <h1>Checkout</h1>
      </div>

      <div class="checkout-empty" v-if="cart.length === 0">
        <div class="empty-checkout-message">
          <span class="material-icons empty-checkout-icon">shopping_cart</span>
          <h2>Your cart is empty</h2>
          <p>You need to add items to your cart before checking out.</p>
          <router-link to="/" class="btn">Shop Now</router-link>
        </div>
      </div>

      <div class="checkout-content" v-else>
        <div class="checkout-steps">
          <div
            v-for="(step, index) in steps"
            :key="index"
            :class="['step', {
              'active': currentStep === index,
              'completed': currentStep > index
            }]"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-label">{{ step }}</div>
          </div>
        </div>

        <!-- Step 1: Review Products -->
        <div v-if="currentStep === 0" class="checkout-step-content">
          <div class="checkout-products">
            <h2>Review Your Order</h2>

            <div class="checkout-product-list">
              <div
                v-for="item in cart"
                :key="item.id"
                class="checkout-product-item"
              >
                <div class="checkout-product-image">
                  <img :src="item.image" :alt="item.name">
                </div>
                <div class="checkout-product-info">
                  <h3>{{ item.name }}</h3>
                  <p class="checkout-product-price">Rs. {{ item.price.toLocaleString() }}</p>
                  <p class="checkout-product-quantity">Quantity: {{ item.quantity }}</p>
                </div>
                <div class="checkout-product-total">
                  Rs. {{ (item.price * item.quantity).toLocaleString() }}
                </div>
              </div>
            </div>

            <div class="checkout-total">
              <h3>Order Total: Rs. {{ cartTotal.toLocaleString() }}</h3>
            </div>

            <div class="step-actions">
              <router-link to="/cart" class="btn btn-outline">Back to Cart</router-link>
              <button @click="nextStep" class="btn">Continue to Information</button>
            </div>
          </div>
        </div>

        <!-- Step 2: Customer Information -->
        <div v-else-if="currentStep === 1" class="checkout-step-content">
          <div class="checkout-form">
            <h2>Your Information</h2>

            <form @submit.prevent="submitInfo">
              <div class="form-group">
                <label for="name" class="form-label">Full Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="customerInfo.name"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="customerInfo.email"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="customerInfo.phone"
                  class="form-input"
                  required
                >
              </div>

              <div class="form-group">
                <label for="address" class="form-label">Delivery Address</label>
                <textarea
                  id="address"
                  v-model="customerInfo.address"
                  class="form-input"
                  rows="3"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="city" class="form-label">City</label>
                <input
                  type="text"
                  id="city"
                  v-model="customerInfo.city"
                  class="form-input"
                  required
                >
              </div>

              <div class="payment-options">
                <h3>Select Payment Method</h3>

                <div class="payment-methods">
                  <div
                    :class="['payment-method', { selected: customerInfo.paymentMethod === 'easypaisa' }]"
                    @click="customerInfo.paymentMethod = 'easypaisa'"
                  >
                    <img src="/images/easypay.png" alt="EasyPaisa">
                    <span>EasyPaisa</span>
                  </div>

                  <div
                    :class="['payment-method', { selected: customerInfo.paymentMethod === 'jazzcash' }]"
                    @click="customerInfo.paymentMethod = 'jazzcash'"
                  >
                    <img src="/images/jazzcash.png" alt="JazzCash">
                    <span>JazzCash</span>
                  </div>
                </div>
              </div>

              <div class="step-actions">
                <button type="button" @click="prevStep" class="btn btn-outline">Back to Order Review</button>
                <button type="submit" class="btn">Continue to Payment</button>
              </div>
            </form>
          </div>
        </div>

        <!-- Step 3: Payment -->
        <div v-else-if="currentStep === 2" class="checkout-step-content">
          <div class="payment-instructions">
            <h2>Complete Your Payment</h2>

            <div class="payment-details">
              <div v-if="customerInfo.paymentMethod === 'easypaisa'" class="payment-method-details">
                <img src="/images/easypay.png" alt="EasyPaisa" class="payment-logo">
                <h3>Pay via EasyPaisa</h3>

                <div class="payment-steps">
                  <p>1. Open your EasyPaisa mobile app</p>
                  <p>2. Send Rs. {{ cartTotal.toLocaleString() }} to this number: <strong>0312-3456789</strong></p>
                  <p>3. Use your order reference: <strong>{{ orderReference }}</strong></p>
                  <p>4. Once payment is completed, click the button below</p>
                </div>
              </div>

              <div v-else-if="customerInfo.paymentMethod === 'jazzcash'" class="payment-method-details">
                <img src="/images/jazzcash.png" alt="JazzCash" class="payment-logo">
                <h3>Pay via JazzCash</h3>

                <div class="payment-steps">
                  <p>1. Open your JazzCash mobile app</p>
                  <p>2. Send Rs. {{ cartTotal.toLocaleString() }} to this number: <strong>0331-9876543</strong></p>
                  <p>3. Use your order reference: <strong>{{ orderReference }}</strong></p>
                  <p>4. Once payment is completed, click the button below</p>
                </div>
              </div>

              <div class="order-summary">
                <h3>Order Summary</h3>
                <p>Name: {{ customerInfo.name }}</p>
                <p>Email: {{ customerInfo.email }}</p>
                <p>Phone: {{ customerInfo.phone }}</p>
                <p>Address: {{ customerInfo.address }}, {{ customerInfo.city }}</p>
                <p>Total: Rs. {{ cartTotal.toLocaleString() }}</p>
                <p>Order Reference: {{ orderReference }}</p>
              </div>
            </div>

            <div class="step-actions">
              <button @click="prevStep" class="btn btn-outline">Back to Information</button>
              <button @click="completePayment" class="btn">Complete Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CheckoutPage',
  data() {
    return {
      steps: ['Review Order', 'Information', 'Payment'],
      currentStep: 0,
      customerInfo: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        paymentMethod: 'easypaisa'
      },
      orderReference: ''
    };
  },
  computed: {
    ...mapGetters(['cart', 'cartTotal'])
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },
    prevStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    submitInfo() {
      if (!this.customerInfo.paymentMethod) {
        alert('Please select a payment method');
        return;
      }

      // Generate a random order reference
      this.orderReference = 'ORD-' + Math.floor(100000 + Math.random() * 900000);

      this.nextStep();
    },
    completePayment() {
      // In a real application, you would verify the payment status here
      // For this demo, we're just simulating a successful payment
      this.$store.dispatch('clearCart');
      this.$router.push('/payment-success');
    }
  },
  created() {
    if (this.cart.length === 0) {
      this.$router.push('/cart');
    }
  }
}
</script>

<style scoped>
.checkout-page {
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

.checkout-empty {
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.empty-checkout-message {
  max-width: 500px;
}

.empty-checkout-icon {
  font-size: 64px;
  color: #ccc;
  margin-bottom: 20px;
}

.empty-checkout-message h2 {
  margin-bottom: 15px;
  font-size: 24px;
}

.empty-checkout-message p {
  margin-bottom: 30px;
  color: #666;
}

.checkout-steps {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  position: relative;
}

.step:not(:last-child):after {
  content: '';
  position: absolute;
  top: 20px;
  right: -50px;
  width: 100px;
  height: 2px;
  background-color: #ddd;
}

.step.active .step-number, .step.completed .step-number {
  background-color: #e60000;
  color: white;
}

.step.completed:after {
  background-color: #e60000;
}

.step-number {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-bottom: 10px;
}

.step-label {
  font-size: 14px;
  font-weight: 500;
}

.checkout-step-content {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
  margin-bottom: 40px;
}

.checkout-step-content h2 {
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
}

.checkout-step-content h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #e60000;
}

.checkout-product-list {
  margin-bottom: 30px;
}

.checkout-product-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.checkout-product-image {
  width: 80px;
  height: 80px;
  border-radius: 4px;
  overflow: hidden;
  margin-right: 15px;
}

.checkout-product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.checkout-product-info {
  flex: 1;
}

.checkout-product-info h3 {
  font-size: 16px;
  margin-bottom: 5px;
}

.checkout-product-price, .checkout-product-quantity {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.checkout-product-total {
  font-weight: 600;
  font-size: 16px;
  min-width: 120px;
  text-align: right;
}

.checkout-total {
  text-align: right;
  padding: 20px 0;
  border-top: 1px solid #eee;
  margin-bottom: 30px;
}

.checkout-total h3 {
  font-size: 20px;
  color: #e60000;
}

.step-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.checkout-form h2 {
  margin-bottom: 30px;
}

.payment-options {
  margin-top: 30px;
}

.payment-options h3 {
  margin-bottom: 20px;
  font-size: 18px;
}

.payment-methods {
  display: flex;
  gap: 20px;
}

.payment-method {
  border: 2px solid #eee;
  border-radius: 8px;
  padding: 15px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.payment-method img {
  height: 40px;
  margin-bottom: 10px;
}

.payment-method.selected {
  border-color: #e60000;
  background-color: #fff9f9;
}

.payment-method-details {
  text-align: center;
  margin-bottom: 30px;
}

.payment-logo {
  height: 60px;
  margin-bottom: 20px;
}

.payment-steps {
  max-width: 500px;
  margin: 0 auto;
  text-align: left;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.payment-steps p {
  margin-bottom: 10px;
}

.order-summary {
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
}

.order-summary h3 {
  margin-bottom: 15px;
}

.order-summary p {
  margin-bottom: 10px;
}

@media (max-width: 768px) {
  .checkout-steps {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  .step {
    flex-direction: row;
    width: 100%;
  }

  .step:not(:last-child):after {
    display: none;
  }

  .step-number {
    margin-right: 10px;
    margin-bottom: 0;
  }

  .payment-methods {
    flex-direction: column;
  }

  .payment-method {
    width: 100%;
  }

  .step-actions {
    flex-direction: column;
    gap: 10px;
  }

  .step-actions button, .step-actions a {
    width: 100%;
  }
}
</style>
