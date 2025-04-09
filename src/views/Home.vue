<template>
  <div class="home">
    <div class="hero-section">
      <div class="container">
        <div class="hero-content">
          <h1>PLY PLY</h1>
          <p>Discover authentic Pakistani snacks delivered to your doorstep. From savory to sweet, we have all your favorites!</p>
          <div class="hero-cta">
            <a href="#products" class="btn">Shop Now</a>
          </div>
        </div>
      </div>
    </div>

    <div id="products" class="products-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Products</h2>
          <div class="category-filter">
            <button
              @click="activeCategory = ''"
              :class="['filter-btn', { active: activeCategory === '' }]"
            >
              All
            </button>
            <button
              v-for="category in categories"
              :key="category"
              @click="activeCategory = category"
              :class="['filter-btn', { active: activeCategory === category }]"
            >
              {{ formatCategory(category) }}
            </button>
          </div>
        </div>

        <div class="products-grid">
          <div
            v-for="product in filteredProducts"
            :key="product.id"
            class="product-item"
          >
            <ProductCard :product="product" @added="showAddedMessage" />
          </div>
        </div>
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
  name: 'HomePage',
  components: {
    ProductCard
  },
  data() {
    return {
      activeCategory: '',
      showMessage: false,
      messageTimeout: null
    }
  },
  computed: {
    ...mapGetters(['products']),
    filteredProducts() {
      if (!this.activeCategory) {
        return this.products;
      }
      return this.products.filter(product => product.category === this.activeCategory);
    },
    categories() {
      const categories = new Set();
      this.products.forEach(product => {
        categories.add(product.category);
      });
      return Array.from(categories).sort();
    }
  },
  methods: {
    formatCategory(category) {
      return category.charAt(0).toUpperCase() + category.slice(1);
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
  beforeDestroy() {
    if (this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
  }
}
</script>

<style scoped>
.hero-section {
  background-color: #e60000;
  color: white;
  padding: 60px 0;
  margin-bottom: 40px;
}

.hero-content {
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-cta .btn {
  font-size: 1.1rem;
  padding: 12px 30px;
  background-color: white;
  color: #e60000;
}

.hero-cta .btn:hover {
  background-color: #f5f5f5;
}

.section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  position: relative;
}

.section-header h2:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 50px;
  height: 3px;
  background-color: #e60000;
  transform: translateX(-50%);
}

.category-filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.filter-btn {
  padding: 8px 16px;
  background-color: #f5f5f5;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background-color: #e60000;
  color: white;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
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
  .hero-content h1 {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
}
</style>
