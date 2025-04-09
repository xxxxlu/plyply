<template>
  <div class="payment-success">
    <div class="container">
      <div class="success-card">
        <div class="success-icon">
          <span class="material-icons">check_circle</span>
        </div>
        <h1>Payment Successful!</h1>
        <p class="message">Thank you for your purchase. Your order has been placed successfully.</p>

        <div class="next-steps">
          <h2>What's Next?</h2>
          <ul>
            <li>You will receive an email confirmation shortly.</li>
            <li>Your order will be processed within 24 hours.</li>
            <li>Delivery typically takes 2-4 business days.</li>
          </ul>
        </div>

        <div class="actions">
          <router-link to="/" class="btn">Continue Shopping</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentSuccessPage'
}
</script>

<style scoped>
.payment-success {
  padding: 60px 0;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.success-icon {
  font-size: 80px;
  color: #4CAF50;
  margin-bottom: 20px;
}

.success-icon .material-icons {
  font-size: 80px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
}

.message {
  font-size: 18px;
  margin-bottom: 30px;
  color: #666;
}

.next-steps {
  text-align: left;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.next-steps h2 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.next-steps ul {
  padding-left: 20px;
}

.next-steps li {
  margin-bottom: 10px;
  color: #555;
}

.actions .btn {
  padding: 15px 30px;
  font-size: 16px;
}

@media (max-width: 576px) {
  .success-card {
    padding: 30px 20px;
  }

  .success-icon {
    font-size: 60px;
  }

  .success-icon .material-icons {
    font-size: 60px;
  }

  h1 {
    font-size: 24px;
  }

  .message {
    font-size: 16px;
  }
}
</style>
