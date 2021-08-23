const app = Vue.createApp({
    data: function() {
        return {
            product: 'Stock',
            description: 'I love ',
            image: './assets/images/socks_blue.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg'},
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            inStock: true,
            cart:11
        }
    },
    methods:  {
        addToCart: function() {
            this.cart ++;
        },
        updateImage(image) {
            this.image = image
        },
        removeFromCart() {
            if(this.cart>0) {
                this.cart --;
            }
        }
    }
})