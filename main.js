const app = Vue.createApp({
    data: function() {
        return {
            product: 'Stock',
            description: 'I love ',
            image: './assets/images/socks_blue.jpg',
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
              { id: 2234, color: 'green' },
              { id: 2235, color: 'blue' },
            ],
            inStock: false
        }
    }
})