# Geolocation-P1-
@author: Juan Camilo Rodriguez Montoya
@email: jrodri92@eafit.edu.co

# Descripción de aplicación

Aplicación web que permite a un usuario registrarse y iniciar sesión.
Tambien permite mirar la ubicacion exacta de donde se encuentra en un mapa
de google maps.

  - Aplicación realizada con nodejs
  - Aplicación del patron MVC
  - Configuración de ambientes: Desarrollo y pruebas

# 1. Análisis

## 1.1 Requisitos:
  
  - Registro de usuario
  - Inicio de sesión de usuario
  - Cierre de sesión de usuario
  - Obtener ubicación
  - Desplegar información en un mapa
  - Guardar ubicación

## 1.2Definición de tecnología de desarrollo y despliegue para la aplicación:
    
  - Lenguaje de Programación: Javascript
  - Framework web backend: NodeJS - Express
  - Framework web frontend: Boostrap - se utilizará Templates JADE
  - Base de datos: MongoDB
  - Web App Server: NodeJS
  - Web Server: NGINX

# 2. Desarrollo
  
  Se generó la base, con Yeoman:

  $ yo express

# 3. Diseño

# 3.1 Modelo de datos

  User:

  {name: String, password: String, email: String, date: Date }
 
  Location:

  {useremail: String, latitude: Number, longitude: Number, date: Date}

# 3.2 Servicios - web

/* Servicio Web: Verifica si un usuario esta logeado: GET URI: /Home */

/* Servicio Web: Inserta la ubicacion en la base de datos: POST URI: /Home */

/* Servicio Web: Registro de usuarios : GET URI: /users/singnup */

/* Servicio Web: Inserta un nuevo usuario a la base de datos: POST URI: /users/singup */

/* Servicio Web: Autentifica usuarios: GET URI: /users/login */

/* Servicio Web: Cierra la sesión de un usuario: GET URI: /users/logout */

#Basado en

https://github.com/dlemusg/appwebArticulosNodejs/blob/master/analisis-diseno.md

