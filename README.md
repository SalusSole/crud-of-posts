# Crud de Posts

Desarrollé este proyecto con Angular en su versión 11.0.6.

Esta es una página sencilla que muestra posts de prueba con sus respectivos comentarios obtenidos de [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

***
##### NOTA
***

A continuación adjunto una captura de pantalla tomada del sitio de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) donde se muestran las rutas y los métodos con los que es posible hacer peticiones a la API proporcionada. El proyecto que desarrollé solo hace uso de las rutas que se encargan de recuperar con GET los posts y comentarios, ya que no se proporciona una ruta que permita eliminar, añadir o editar un **comentario**, pero debido a que la prueba solicita *poder agregar comentarios a los posts*, *editar comentarios*, y *eliminar comentarios* realicé dichas funcionalidades, pero al no haber una ruta en [JSONPlaceholder](https://jsonplaceholder.typicode.com/) que permita efectuar estas acciones, lo hice de manera que los comentarios y cambios en ellos se guarden en un array de manera temporal en la página, así que al refrescarla página se perderán los datos que usted haya ingresado, ya que la API no permite guardar los cambios en anteriores o nuevos comentarios.

![Rutas admitidas](https://i.ibb.co/vJ7p5q5/Screenshot-2021-02-21-JSONPlaceholder-Free-Fake-REST-API.png)

Habiendo aclarado el contexto con el que desarrollé este proyecto, mostraré cómo puede evaluar dicho proyecto en línea o en su computadora de forma local.

## Link del proyecto

[https://salussole.github.io/crud-of-posts/](https://salussole.github.io/crud-of-posts/).

## Cómo clonar y ejecutar el proyecto de forma local

Antes de clonar y ejecutar este proyecto en su computadora asegúrese de tener instalado [git](https://git-scm.com/downloads), [node](https://nodejs.org/es/download/) y [angular CLI](https://angular.io/cli).

- Para clonar el repositorio abra una terminal o línea de comandos en el directorio donde desee clonar el repositorio y ejecute lo siguiente
```
git clone https://github.com/SalusSole/crud-of-posts.git
```
- Posteriormente diríjase a la carpeta del proyecto
```
cd crud-of-posts
```
- Después debe instalar las dependencias que requiere el proyecto
```
npm install
```
- Si por alguna razón hay un error en la instalación, solo vuelva a ejecutar el comando anterior
- Finalmente, para correr el proyecto en su navegador ejecute  el siguiente comando
```
ng serve --open
```
