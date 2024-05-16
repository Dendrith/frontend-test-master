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
