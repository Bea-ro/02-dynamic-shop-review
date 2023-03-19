feedback comentar mejoras y que yo puse 3 filtros ne vez de 2 y añadí la búsqueda por nombre:

- En la zona de filtros has abusado de utilizar divs sin ninguna semántica.
- La sección de filtros, es decir el HTML con los inputs es estática  no hace falta que la cargues desde JavaScript, puedes crearlo directamente con HTML.
- Hay condiciones que no te están  sirviendo  de nada y están ensuciando el código a la hora de filtrar productos, podrías realizar un switch, eliminar condiciones las cuáles no están sirviendo para nada entre otras muchas maneras con las cuáles podrías refacorizar ese código.
- Podrías insertar la búsqueda del producto en un formulario y los filtros sería mas correcto sintácticamente  y te permitiría al pulsar enter realizar la búsqueda  sin necesidad de pulsar el botón.
- Podías a ver pedido los datos de manera asíncrona en vez de almacenarlo en un objeto dentro del mismo archivo, podrías almacenarlo en un json-server o extraerlo a un archivo externo e importarlo para limpiar tu código.
puse 1 iltro más y search


el de seller no va segundas veces ni stock si están los otros 2. Me queda probar si 
se puede usar todo el rato productList en vez de filtered
separar los css por componentes
borrar los console.log

// const seller = sellerSelectElement.options[sellerSelectElement.selectedIndex].value;
// const stock = stockSelectElement.options[stockSelectElement.selectedIndex].value;