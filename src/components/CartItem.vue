<template>
  <div class="cart-item">
    <div class="cart-item-image">
      <img :src="item.image" :alt="item.name">
    </div>
    <div class="cart-item-details">
      <h3 class="cart-item-name">{{ item.name }}</h3>
      <p class="cart-item-price">Rs. {{ item.price.toLocaleString() }}</p>
    </div>
    <div class="cart-item-quantity">
      <button
        @click="updateQuantity(item.quantity - 1)"
        class="quantity-btn"
        :disabled="item.quantity <= 1"
      >-</button>
      <span class="quantity">{{ item.quantity }}</span>
      <button
        @click="updateQuantity(item.quantity + 1)"
        class="quantity-btn"
      >+</button>
    </div>
    <div class="cart-item-total">
      <p>Rs. {{ (item.price * item.quantity).toLocaleString() }}</p>
    </div>
    <div class="cart-item-remove">
      <button @click="removeFromCart" class="remove-btn">
        <span class="material-icons">delete</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateQuantity(quantity) {
      if (quantity < 1) return;

      try {
        this.$store.dispatch('updateQuantity', {
          productId: this.item.id,
          quantity
        });
      } catch (error) {
        alert(error.message);
      }
    },
    removeFromCart() {
      this.$store.dispatch('removeFromCart', this.item.id);
    }
  }
}
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 15px;
}

.cart-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
}

.cart-item-name {
  font-size: 16px;
  margin-bottom: 5px;
}

.cart-item-price {
  font-size: 14px;
  color: #666;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
  margin: 0 20px;
}

.quantity-btn {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity {
  margin: 0 10px;
  font-size: 16px;
  min-width: 20px;
  text-align: center;
}

.cart-item-total {
  font-weight: 600;
  min-width: 100px;
  text-align: right;
  margin-right: 20px;
}

.cart-item-remove {
  margin-left: auto;
}

.remove-btn {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  transition: color 0.3s ease;
}

.remove-btn:hover {
  color: #e60000;
}

@media (max-width: 768px) {
  .cart-item {
    flex-wrap: wrap;
  }

  .cart-item-details {
    width: calc(100% - 95px);
    margin-bottom: 10px;
  }

  .cart-item-quantity, .cart-item-total {
    margin: 10px 0;
  }

  .cart-item-remove {
    position: absolute;
    right: 15px;
    top: 15px;
  }
}
</style>
