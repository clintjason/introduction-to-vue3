const app = Vue.createApp({
    data: function() {
        return {
            cart: [],
            premium: false,
        }
    },
    methods:  {
        updateCart(id){
            this.cart.push(id);
        },
        removeCart(id) {
            let indexOfId = this.cart.indexOf(id);
            this.cart.splice(indexOfId,1);
        }
    },
    computed: {
        
    }
})