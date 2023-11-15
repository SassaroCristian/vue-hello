const { createApp } = Vue;

createApp ({
    data () {
        return {
            message: 'Hello World!',
            link: 'https://img.macba.cat/public/styles/16x9_large/public/imagenes/obras/0412_002_l.jpg?h=328948d6&itok=ypw5vAg8'
        }
    }
}).mount('#app')