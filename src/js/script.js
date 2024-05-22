// Inserción de productos
// Obtener la plantilla
var source = document.getElementById("products-template").innerHTML;
  
// Compilar la plantilla
var template = Handlebars.compile(source);

document.addEventListener("DOMContentLoaded", function() {
    var source = document.getElementById("products-template").innerHTML;
    var template = Handlebars.compile(source);
    var allProducts = [];

    // Obtener los datos del archivo JSON
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data.products;
            renderProducts(allProducts);
        })
        .catch(error => console.error('Error:', error));

    // Función renderizar productos
    function renderProducts(products) {
        var html = template({ products: products });
        document.getElementById("result").innerHTML = html;
    }

    // Función boton filtrado
    document.getElementById("botonFiltrado").addEventListener("click", function() {
        var selectedFilters = [];
        document.querySelectorAll('.checkboxes:checked').forEach(function(checkbox) {
            selectedFilters.push(parseInt(checkbox.value));
        });

        var filteredProducts = allProducts.filter(function(product) {
            return selectedFilters.includes(product.filterId);
        });

        renderProducts(filteredProducts);

        //Elimina la clase mostrar del filtro
        document.querySelector('.filter').classList.remove('mostrar');
    });

    // Función limpiar boton clear
    document.getElementById("clear").addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelectorAll('.checkboxes').forEach(function(checkbox) {
            checkbox.checked = false;
        });
        renderProducts(allProducts);

        //Elimina la clase mostrar del filtro
        document.querySelector('.filter').classList.remove('mostrar');
    });
});

// Animación filtro
document.addEventListener('DOMContentLoaded', function() {
    //eventListeners();
    openFilter();
    filterChecked();
});

// Función desplegar filtro
function openFilter() {
    //constantes
    const btnOpenFilter = document.querySelector('#btnOpenFilter');
    const filter = document.querySelector('.filter');

    //Función agregar o eliminar clase mostrar
    btnOpenFilter.addEventListener('click', function(){
        if (filter.classList.contains('mostrar')) {
            filter.classList.remove('mostrar');
        } else {
            filter.classList.add('mostrar');
        }
    });
}

//Función chequeado checkbox
function filterChecked() {
    //Constantes checkbox
    const check1 = document.getElementById('checkbox1');
    const check2 = document.getElementById('checkbox2');
    const check3 = document.getElementById('checkbox3');
    const checkClear = document.getElementById('clear');

    //Eventos checkbox
    //Marcar el checkbox disabled
    check1.addEventListener('change', function(){
        if(this.checked) {
            this.disabled = true;
        }
    });
    check2.addEventListener('change', function(){
        if(this.checked) {
            this.disabled = true;
        }
    });
    check3.addEventListener('change', function(){
        if(this.checked) {
            this.disabled = true;
        }
    });

    //Eliminar checked y disabled del checkbox
    checkClear.addEventListener('click', function() {
        check1.checked = false;
        check2.checked = false;
        check3.checked = false;
        check1.disabled = false;
        check2.disabled = false;
        check3.disabled = false;

    });
}

