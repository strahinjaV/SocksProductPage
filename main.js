const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            variants: [
                {id: 2234, color: 'green'},
                {id: 2235, color: 'blue'},
            ],
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['small', 'medium', 'large', 'extraLarge'],
        }
    }
})
