Mejoras en base al feedback recibido:

- Reducción del uso de divs sin semántica en la zona de filtros.
- Sección de filtros creada con HTML y no cargada desde JavaScript por ser estática.
- Eliminación de condiciones para el filtrado de productos, refacorizando el código. 
- Búsquedas directas al introducir o seleccionar inputs, sin necesidad de clicar un botón después.
- Almacenamiento de datos en json-server en vez de objeto dentro de main.js. Petición asíncrona.

Otras mejoras: ordenación modular del código.

//Tiene que haber algo que ocupe de ancho 379. search-container ya no existe y se ha puesto sus props a search-input
escalar elementos a pantalla mas pequeño y evitar que ocupen más de lo que mide la pantalla