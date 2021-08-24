app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="product-display">
        <div class="product-container">
        <div class="product-image">
            <!-- :class="[ !inStock ? out-of-stock : '']" -->
            <img v-bind:src="image"
            
            :class="{ 'out-of-stock-img': !inStock }">
        </div>
        <div class="product-info">
            <h1>{{ title}}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <product-details :details="details"></product-details>
            <div 
            class="color-circle"
            v-for="(variant, index) in variants" 
            :key="variant.id"
            @mouseover="updateVariant(index)"
            :style="{backgroundColor: variant.color}">
            </div>
            <button class="button" 
            v-on:click="addToCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
            >Add to Cart</button>
            <button class="button" @click="removeFromCart"
            :disabled="!inStock"
            :class="{disabledButton: !inStock}"
            >Remove Item</button>
        </div>
        </div>
    </div>`,
    data: function() {
        return {
            product: 'Socks',
            selectedVariant: 0,
            description: 'I love ',
            details: ['50% cotton', '30% wool', '20% polyester', '10% linewool'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
            ],
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
        shipping: function() {
            if(this.premium) {
                return 'Free'
            }
            return '$2.99';
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        }
    }
    
})