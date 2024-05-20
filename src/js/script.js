// Inserción de productos
// Obtener la plantilla
var source = document.getElementById("products-template").innerHTML;
  
// Compilar la plantilla
var template = Handlebars.compile(source);
  
// Obtener los datos del archivo JSON
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        // Renderizar la plantilla con los datos JSON
        var html = template(data);
        
        // Insertar el HTML generado en el documento
        document.getElementById("result").innerHTML = html;
    })
    .catch(error => console.error('Error:', error));

// Animación filtro

document.addEventListener('DOMContentLoaded', function() {

    eventListeners();
    

});

// Función evento boton filtro
function eventListeners() {
    
    const btnFilter = document.querySelector('#btn-filter');

    btnFilter.addEventListener('click', openFilter);
}

// Función para agregar o eliminar clase mostrar
function openFilter() {
   
    const filter = document.querySelector('.filter');

    if (filter.classList.contains('mostrar')) {
        filter.classList.remove('mostrar');
    } else {
        filter.classList.add('mostrar');
    }
    

}