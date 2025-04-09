<template>
  <div class="contact-page">
    <div class="container">
      <div class="page-header">
        <h1>Contact Us</h1>
        <p>Have questions about our products or your order? Reach out to us!</p>
      </div>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <h2>Contact Information</h2>

            <div class="info-item">
              <span class="material-icons">email</span>
              <div>
                <h3>Email</h3>
                <p>plyply@ply.online</p>
                <p>support@ply.online</p>
              </div>
            </div>

            <div class="info-item">
              <span class="material-icons">location_on</span>
              <div>
                <h3>Address</h3>
                <p>123 Food Street, Gulberg</p>
                <p>Lahore, Pakistan</p>
              </div>
            </div>

            <div class="payment-methods">
              <h3>We Accept</h3>
              <div class="payment-icons">
                <img src="/images/easypay.png" alt="EasyPaisa" class="payment-icon">
                <img src="/images/jazzcash.png" alt="JazzCash" class="payment-icon">
              </div>
            </div>
          </div>
        </div>

        <div class="contact-form-container">
          <form class="contact-form" @submit.prevent="submitForm">
            <h2>Send Us a Message</h2>

            <div class="form-group">
              <label for="name" class="form-label">Your Name</label>
              <input type="text" id="name" v-model="form.name" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input type="email" id="email" v-model="form.email" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="subject" class="form-label">Subject</label>
              <input type="text" id="subject" v-model="form.subject" class="form-input" required>
            </div>

            <div class="form-group">
              <label for="message" class="form-label">Message</label>
              <textarea id="message" v-model="form.message" class="form-input" rows="5" required></textarea>
            </div>

            <button type="submit" class="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">check_circle</span>
        <p>Your message has been sent successfully!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      showMessage: false,
      messageTimeout: null
    }
  },
  methods: {
    submitForm() {
      // In a real application, you would send the form data to a server
      // For this demo, we're just simulating success
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);

      // Reset form
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    }
  },
  beforeDestroy() {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 40px 0 60px;
}

.page-header {
  text-align: center;
  margin-bottom: 40px;
}

.page-header h1 {
  font-size: 32px;
  margin-bottom: 15px;
}

.page-header p {
  font-size: 18px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 30px;
}

.info-card, .contact-form {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.info-card h2, .contact-form h2 {
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
}

.info-card h2:after, .contact-form h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #e60000;
}

.info-item {
  display: flex;
  margin-bottom: 30px;
}

.info-item .material-icons {
  font-size: 24px;
  color: #e60000;
  margin-right: 15px;
  margin-top: 3px;
}

.info-item h3 {
  font-size: 18px;
  margin-bottom: 5px;
}

.info-item p {
  color: #666;
  margin: 0 0 5px 0;
}

.payment-methods h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.payment-icons {
  display: flex;
  gap: 15px;
}

.payment-icon {
  height: 40px;
  width: auto;
}

.contact-form-container {
  display: flex;
  justify-content: center;
}

.contact-form {
  width: 100%;
  max-width: 600px;
}

.notification {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  animation: slideIn 0.3s ease;
}

.notification-content {
  display: flex;
  align-items: center;
  background-color: #4CAF50;
  color: white;
  padding: 15px 20px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.success-icon {
  margin-right: 10px;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .info-card, .contact-form {
    margin-bottom: 20px;
  }
}
</style>
