const app = Vue.createApp({
  /*template: `
  <h1>Hola Mundo</h1>
  <p>Desde app.js </p>
  `,*/
  data() {
    return {
      message: ' mensaje desde app.js',
    };
  },
});

app.mount('#myApp');
