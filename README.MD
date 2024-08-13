### Pasos en Orden de creación del proyecto

1. Ejecutar
   `nest new back-tkd`

2. Instalar dependencias
   `npm install --save @nestjs/swagger`
   `npm install --save @nestjs/typeorm typeorm mysql2`

3. Inicializar el proyecto
   (moverse a la carpeta de back antes)
   `npm run start:dev`

4. En el navegador ingresar a http://localhost:3000/api#

### Documentación

https://docs.nestjs.com/openapi/introduction

### Siguientes Clases

.module de cada cosa para "exportar" para afuera
Dependencia de nest para variables de entorno
config service
Inyectar servicios en el constructor

### UI Ejemplo

https://edme88.github.io/Tkd/nuevoTkd.html

## Definiciones Básicas

###

### DTO

DTO significa "Data Transfer Object" (Objeto de Transferencia de Datos). Es un patrón de diseño utilizado comúnmente en el desarrollo de software para encapsular un conjunto de datos y transferirlo entre subsistemas de una aplicación. En el contexto de una aplicación web o de servicios, un DTO se utiliza para transferir datos entre el cliente y el servidor, o entre diferentes capas de la aplicación.

Un DTO proporciona una forma estructurada y coherente de transferir datos específicos entre diferentes partes de una aplicación, lo que ayuda a mantener un acoplamiento bajo y una separación clara de responsabilidades entre los distintos componentes del sistema.

`nest generate controller user`

https://jamboard.google.com/d/138X712TOMtuhQqN-3UTIEj2z1cYfXRTKWNWH1qBKZrY/edit?usp=meet_whiteboard

`nest generate service user`

# Proyecto

## Estructura del Proyecto

Documentar!!!

SIguientes pasos:
[x] Crear la BD
Conexión de TypeORM a la BD (migración de TypeORM????)
[x] Crear el repository ()
[x] Agregar más datos al usuario (DTO)
[x] Hasheo de contraseña para el usuario
[x] Formato de la respuesta para el usuario
[ ] CRUD para taekwondistas, tournaments, training, exams

Scripts para drop table, create table e insert data

Diseño de las relaciones en las tablas

https://jamboard.google.com/d/1sud_lblkJtp9ACb7waVKNMXmcf5RcX1liVaSFW14VJU/viewer?f=0