# Crud de Posts

Desarrollé este proyecto con Angular en su versión 11.0.6.

Esta es una página sencilla que muestra posts de prueba con sus respectivos comentarios obtenidos de [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

***
##### NOTA
***

A continuación adjunto una captura de pantalla tomada del sitio de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) donde se muestran las rutas con los métodos con los que es posible hacer peticiones a la API proporcionada. El proyecto desarrollado solo hace uso de las rutas que se encanrgan de recuperar con GET los posts y comentarios, ya que no se proporciona una ruta que permita eliminar, añadir o editar un **comentario**, pero debido a que la prueba solicita *poder agregar comentarios a los posts*, *editar comentarios*, y *eliminar comentarios* realicé dichas funcionalidades, pero al no haber una ruta en [JSONPlaceholder](https://jsonplaceholder.typicode.com/) que permita efectuar estas acciones, lo hice de manera que los comentarios y cambios en ellos se guarden en un array de manera temporal en la página, así que al refrescar la página se perderan los datos que usted haya ingresado, ya que la API no permite guardar los cambios en anteriores o nuevos comentarios.

![Rutas admitidas](https://i.ibb.co/vJ7p5q5/Screenshot-2021-02-21-JSONPlaceholder-Free-Fake-REST-API.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
