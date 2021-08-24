const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            selectedVariant: 0,
            description: 'I love ',
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
            cart:11,
            brand: 'Vue Mastery'
        }
    },
    methods:  {
        addToCart: function() {
            this.cart ++;
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeFromCart() {
            if(this.cart>0) {
                this.cart --;
            }
        }
    },
    computed: {
        title: function() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity;
        }
    }
})