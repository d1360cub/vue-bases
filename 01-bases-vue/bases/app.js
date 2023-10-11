const app = Vue.createApp({
  /*template: `
  <h1>Hola Mundo</h1>
  <p>Desde app.js </p>
  `,*/
  data() {
    return {
      title: 'Hola Mundo',
      message: ' mensaje sin hacer click en el boton',
    };
  },
  methods: {
    changeQuote(event) {
      console.log(event);
      this.message = 'mensaje cambiado al hacer click en el boton';
      this.capitalize();
    },
    capitalize() {
      this.title = this.title.toUpperCase();
    },
  },
});

app.mount('#myApp');
