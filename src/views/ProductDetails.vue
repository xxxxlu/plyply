<template>
  <div class="product-details">
    <div class="container" v-if="product">
      <div class="breadcrumb">
        <router-link to="/">Home</router-link> / {{ product.name }}
      </div>

      <div class="product-container">
        <div class="product-image">
          <img :src="product.image" :alt="product.name">
        </div>

        <div class="product-info">
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-price">Rs. {{ product.price.toLocaleString() }}</p>
          <p class="product-description">{{ product.description }}</p>

          <div class="quantity-selector">
            <label for="quantity">Quantity:</label>
            <div class="quantity-controls">
              <button
                @click="quantity > 1 ? quantity-- : null"
                class="quantity-btn"
              >-</button>
              <input
                type="number"
                id="quantity"
                v-model.number="quantity"
                min="1"
                class="quantity-input"
              >
              <button
                @click="quantity++"
                class="quantity-btn"
              >+</button>
            </div>
          </div>

          <button @click="addToCart" class="btn add-to-cart-btn">
            Add to Cart
          </button>

          <div class="product-meta">
            <p class="product-category">Category: <span>{{ formatCategory(product.category) }}</span></p>
          </div>
        </div>
      </div>

      <div class="related-products" v-if="relatedProducts.length > 0">
        <h2>Related Products</h2>
        <div class="products-grid">
          <div
            v-for="relatedProduct in relatedProducts"
            :key="relatedProduct.id"
            class="product-item"
          >
            <ProductCard :product="relatedProduct" @added="showAddedMessage" />
          </div>
        </div>
      </div>
    </div>

    <div class="container" v-else-if="notFound">
      <div class="error-message">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist or has been removed.</p>
        <router-link to="/" class="btn">Back to Home</router-link>
      </div>
    </div>

    <div class="container" v-else>
      <div class="loading">
        <p>Loading product details...</p>
      </div>
    </div>

    <div v-if="showMessage" class="notification">
      <div class="notification-content">
        <span class="material-icons success-icon">check_circle</span>
        <p>Item added to cart successfully!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductCard from '../components/ProductCard.vue';

export default {
  name: 'ProductDetailsPage',
  components: {
    ProductCard
  },
  data() {
    return {
      quantity: 1,
      notFound: false,
      showMessage: false,
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['getProductById', 'products']),
    productId() {
      return parseInt(this.$route.params.id);
    },
    product() {
      return this.getProductById(this.productId);
    },
    relatedProducts() {
      if (!this.product) return [];

      return this.products.filter(product => {
        return product.category === this.product.category && product.id !== this.product.id;
      }).slice(0, 4);
    }
  },
  methods: {
    formatCategory(category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
    },
    addToCart() {
      if (this.quantity < 1) {
        this.quantity = 1;
        return;
      }

      try {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: this.quantity
        });
        this.showAddedMessage();
      } catch (error) {
        alert(error.message);
      }
    },
    showAddedMessage() {
      this.showMessage = true;

      if (this.messageTimeout) {
        clearTimeout(this.messageTimeout);
      }

      this.messageTimeout = setTimeout(() => {
        this.showMessage = false;
      }, 3000);
    }
  },
  created() {
    if (!this.product) {
      this.notFound = true;
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
.product-details {
  padding: 30px 0;
}

.breadcrumb {
  margin-bottom: 30px;
  font-size: 14px;
}

.breadcrumb a {
  color: #e60000;
  text-decoration: none;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
}

.product-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.product-name {
  font-size: 28px;
  margin-bottom: 15px;
}

.product-price {
  font-size: 24px;
  font-weight: 700;
  color: #e60000;
  margin-bottom: 20px;
}

.product-description {
  margin-bottom: 30px;
  line-height: 1.6;
  color: #555;
}

.quantity-selector {
  margin-bottom: 30px;
}

.quantity-selector label {
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
}

.quantity-controls {
  display: flex;
  align-items: center;
}

.quantity-btn {
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.quantity-input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: 1px solid #ddd;
  font-size: 16px;
  margin: 0 5px;
}

.add-to-cart-btn {
  width: 100%;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 30px;
}

.product-meta {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.product-category {
  color: #666;
}

.product-category span {
  color: #333;
  font-weight: 500;
}

.related-products h2 {
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
}

.related-products h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: #e60000;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.error-message, .loading {
  text-align: center;
  padding: 50px 0;
}

.error-message h2 {
  margin-bottom: 15px;
}

.error-message p {
  margin-bottom: 25px;
  color: #666;
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
  .product-container {
    grid-template-columns: 1fr;
  }

  .product-image {
    margin-bottom: 20px;
  }

  .related-products h2 {
    text-align: center;
  }

  .related-products h2:after {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
