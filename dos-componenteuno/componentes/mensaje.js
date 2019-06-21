 Vue.component('mensaje' , {

    data() {
        return{
        saludo: 'Hola desde el componente cambio'
        }
    },
    template: `
        <div>
        <h2>Primer componente</h2>
        <p>{{ saludo }}</p>
        </div>
    `
});

  