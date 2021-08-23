const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            description: 'I love ',
            image: './assets/images/socks_blue.jpg',
            inStock: false,
            inventory: 0,
            onSale: true
        }
    }
})