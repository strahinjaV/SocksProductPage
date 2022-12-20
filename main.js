const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id){
            this.cart.push(id) += 1
        },

        decrease(){
            this.cart.pop()
        }
    },
})
