import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        name: 'Pakora Mix',
        price: 250,
        image: 'https://m.media-amazon.com/images/I/819X7JN2NnL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Delicious pakora mix for making crispy fritters.',
        category: 'snacks'
      },
      {
        id: 2,
        name: 'Samosa',
        price: 300,
        image: 'https://m.media-amazon.com/images/I/715lxTiPqsL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Traditional savory pastry filled with spiced potatoes.',
        category: 'snacks'
      },
      {
        id: 3,
        name: 'Nimko Mix',
        price: 200,
        image: 'https://supercrisp.com.pk/wp-content/uploads/2021/05/nimko-mix-pack.png',
        description: 'Spicy and crunchy snack mix perfect for tea time.',
        category: 'snacks'
      },
      {
        id: 4,
        name: 'Aloo Chips',
        price: 150,
        image: 'https://m.media-amazon.com/images/I/71P7vdPvKNL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Crispy potato chips with a hint of spice.',
        category: 'chips'
      },
      {
        id: 5,
        name: 'Chaat Masala',
        price: 120,
        image: 'https://m.media-amazon.com/images/I/61L9omEKgmL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Tangy spice mix for chaat and snacks.',
        category: 'spices'
      },
      {
        id: 6,
        name: 'Sev',
        price: 180,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtgWi0Rhj6uF1noovrdZ_y9kZRV57kIN2qJQ&s',
        description: 'Crispy chickpea flour noodles perfect for topping or snacking.',
        category: 'snacks'
      },
      {
        id: 7,
        name: 'Biscuits',
        price: 100,
        image: 'https://m.media-amazon.com/images/I/51ofrEdsDrL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Sweet tea biscuits, perfect with chai.',
        category: 'biscuits'
      },
      {
        id: 8,
        name: 'Mathri',
        price: 220,
        image: 'https://m.media-amazon.com/images/I/812kUnIVd8L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Flaky, savory crackers made with wheat flour.',
        category: 'snacks'
      },
      {
        id: 9,
        name: 'Dahi Baray Mix',
        price: 280,
        image: 'https://www.shanfoods.com/wp-content/uploads/2016/11/dahi-bara-mix-8.png',
        description: 'Ready mix for making delicious dahi baray.',
        category: 'mixes'
      },
      {
        id: 10,
        name: 'Zeera Biscuits',
        price: 130,
        image: 'https://m.media-amazon.com/images/I/41Jky3h2+XL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Savory cumin-flavored biscuits.',
        category: 'biscuits'
      },
      {
        id: 11,
        name: 'Peanuts',
        price: 160,
        image: 'https://m.media-amazon.com/images/I/51q9Kq0dIuL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Roasted and salted peanuts.',
        category: 'nuts'
      },
      {
        id: 12,
        name: 'Daal Moth',
        price: 240,
        image: 'https://cliftonnimco.com/wp-content/uploads/2018/04/Dal-Moth.jpg',
        description: 'Savory lentil snack mix with nuts and spices.',
        category: 'snacks'
      },
      {
        id: 13,
        name: 'Shakarparay',
        price: 190,
        image: 'https://usamabakers.com.pk/wp-content/uploads/2024/09/Shakarparay.png',
        description: 'Sweet and crispy diamond-shaped pastries.',
        category: 'sweets'
      },
      {
        id: 14,
        name: 'Murukku',
        price: 170,
        image: 'https://m.media-amazon.com/images/I/41kxrTCElrL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Crunchy spiral-shaped snack made from rice and urad dal flour.',
        category: 'snacks'
      },
      {
        id: 15,
        name: 'Bhakarwadi',
        price: 210,
        image: 'https://m.media-amazon.com/images/I/61OUtvXsiQL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Sweet and spicy pinwheel snack.',
        category: 'snacks'
      },
      {
        id: 16,
        name: 'Gol Gappay Mix',
        price: 290,
        image: 'https://chaiandchurros.com/wp-content/uploads/2021/06/GolGappayPic.jpeg',
        description: 'Complete set for making gol gappay at home.',
        category: 'mixes'
      },
      {
        id: 17,
        name: 'Bakarkhani',
        price: 320,
        image: 'https://www.masala.tv/wp-content/uploads/2015/04/1-3.jpg',
        description: 'Traditional layered bread with a sweet and savory taste.',
        category: 'bakery'
      },
      {
        id: 18,
        name: 'Chana Chaat Mix',
        price: 180,
        image: 'https://www.flourandspiceblog.com/wp-content/uploads/2022/04/IMG_7091.jpg',
        description: 'Spicy and tangy chickpea snack mix.',
        category: 'mixes'
      },
      {
        id: 19,
        name: 'Masala Chips',
        price: 160,
        image: 'https://m.media-amazon.com/images/I/81b-HK2+1SL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Spicy potato chips with a blend of Pakistani spices.',
        category: 'chips'
      },
      {
        id: 20,
        name: 'Qeema Samosa',
        price: 350,
        image: 'https://www.teaforturmeric.com/wp-content/uploads/2025/02/Keema-Samosa-10.jpg',
        description: 'Pastry filled with spiced minced meat.',
        category: 'snacks'
      },
      {
        id: 21,
        name: 'Jalebi Mix',
        price: 230,
        image: 'https://m.media-amazon.com/images/I/616V6r54KlL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Ready mix for making sweet and syrupy jalebi.',
        category: 'sweets'
      },
      {
        id: 22,
        name: 'Badam Puri',
        price: 270,
        image: 'https://m.media-amazon.com/images/I/413ydPpzvbL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Sweet flatbread with almond flavor.',
        category: 'sweets'
      },
      {
        id: 23,
        name: 'Meethi Sev',
        price: 190,
        image: 'https://m.media-amazon.com/images/I/61JOQLzCi8L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Sweet chickpea flour noodles.',
        category: 'sweets'
      },
      {
        id: 24,
        name: 'Karachi Halwa',
        price: 310,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS14Uu2l_YgbOLwCDwK0u5gF_CSErOJf9W6DB1XKmlyT9Om6Zo2qzldaMG0lvyR3lURPEwVNauo7fpVJGLOQDNdOzQgW6KuiEggozTWMWE',
        description: 'Gelatinous sweet made from cornflour.',
        category: 'sweets'
      },
      {
        id: 25,
        name: 'Roasted Chickpeas',
        price: 140,
        image: 'https://m.media-amazon.com/images/I/71fTwKFGgKL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Crunchy and spicy roasted chickpeas.',
        category: 'nuts'
      },
      {
        id: 26,
        name: 'Papri',
        price: 200,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSO8fMkdaaTiLVE8nQ1E-c9FAm8o6jIbLVwlqPt8Z2aQqUraM-vLIvfbNnVccHr-hsvlrce13BRdZWLLVifdc-zW2K7rlxrxrW4s3Ld5g',
        description: 'Crispy fried dough wafers for chaat.',
        category: 'snacks'
      },
      {
        id: 27,
        name: 'Chilli Chips',
        price: 170,
        image: 'https://m.media-amazon.com/images/I/81nNivfShpL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Spicy potato chips with chilli flavor.',
        category: 'chips'
      },
      {
        id: 28,
        name: 'Boondi',
        price: 160,
        image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR6Y9OkrdycXsGfKB9k75K0gcltn8jwI7huzdcKkMWGvT6th33K_924ODGztgVJuHy-9HRg_6KYPqHeM7X8BAMM-rtaCuDbiEN6IDYjdQ',
        description: 'Small, round chickpea flour balls, sweet or savory.',
        category: 'snacks'
      },
      {
        id: 29,
        name: 'Masala Peanuts',
        price: 180,
        image: 'https://m.media-amazon.com/images/I/81irPBWYl8L._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Peanuts coated with spicy masala.',
        category: 'nuts'
      },
      {
        id: 30,
        name: 'Balushahi',
        price: 280,
        image: 'https://m.media-amazon.com/images/I/81lYGGHnRJL._AC_UL640_FMwebp_QL65_.jpg',
        description: 'Sweet, flaky pastry similar to a glazed donut.',
        category: 'sweets'
      }
    ],
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, { product, quantity }) {
      const existingItem = state.cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.cart.push({
          ...product,
          quantity
        });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    addToCart({ commit, state }, { product, quantity }) {
      // Check if adding this product would exceed Rs. 50,000
      const currentTotal = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      const newItemTotal = product.price * quantity;
      const potentialTotal = currentTotal + newItemTotal;

      if (potentialTotal > 50000) {
        throw new Error("Cannot add to cart. Total would exceed Rs. 50,000");
      }

      commit('ADD_TO_CART', { product, quantity });
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateQuantity({ commit, state }, { productId, quantity }) {
      // Check if updating quantity would exceed Rs. 50,000
      const item = state.cart.find(item => item.id === productId);

      if (item) {
        const currentTotal = state.cart.reduce((total, cartItem) => {
          if (cartItem.id === productId) {
            return total;
          }
          return total + (cartItem.price * cartItem.quantity);
        }, 0);

        const newItemTotal = item.price * quantity;
        const potentialTotal = currentTotal + newItemTotal;

        if (potentialTotal > 50000) {
          throw new Error("Cannot update quantity. Total would exceed Rs. 50,000");
        }

        commit('UPDATE_QUANTITY', { productId, quantity });
      }
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  },
  getters: {
    products: state => state.products,
    cart: state => state.cart,
    cartTotal: state => {
      return state.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },
    cartItemCount: state => {
      return state.cart.reduce((count, item) => {
        return count + item.quantity;
      }, 0);
    },
    getProductById: state => id => {
      return state.products.find(product => product.id === id);
    }
  }
})
