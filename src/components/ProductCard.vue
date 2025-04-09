<template>
  <div class="product-card">
    <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="product-link">
      <div class="product-image">
        <img :src="product.image" :alt="product.name">
      </div>
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-price">Rs. {{ product.price.toLocaleString() }}</p>
      </div>
    </router-link>
    <button @click="addToCart" class="btn add-to-cart-btn">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      try {
        this.$store.dispatch('addToCart', {
          product: this.product,
          quantity: 1
        });
        this.$emit('added');
      } catch (error) {
        alert(error.message);
      }
    }
  }
}
</script>

<style scoped>
.product-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.product-link {
  text-decoration: none;
  color: inherit;
  flex: 1;
}

.product-image {
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 15px;
}

.product-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: #e60000;
}

.add-to-cart-btn {
  width: 100%;
  border-radius: 0;
  border-top: 1px solid #eee;
}
</style>
