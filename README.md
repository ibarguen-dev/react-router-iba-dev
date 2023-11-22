# react-router-iba-dev
Ofrece una forma amigable de manejar la navegación y permite definir diferentes rutas para cada componente, lo que hace que sea más fácil crear aplicaciones con múltiples secciones o páginas.

Entre las ventajas de React Router se encuentran:

Sencillez: Proporciona una interfaz sencilla para manejar las rutas en una aplicación React.
Navegación sin recarga: Permite la navegación entre diferentes vistas de la aplicación sin recargar toda la página.
Compatibilidad con múltiples plataformas: Funciona tanto para aplicaciones web como para aplicaciones móviles desarrolladas con React Native.

# Como funciona



El funcionamiento de este enrutador es muy fácil solo tiene que seguir el siguiente ejemplo.

para crear los links solo debes colocar los siguente:

```javascript

<Link to="NombreRuta"><Link/>
```

Cambias lo que esta dentro del NombreRuta por el nombre que tu quieras y en el rutado coloca lo siguente
```javascript

<Router>
	<Route path='/NombreRuta' Component={HomePages}/>
<Router/>
```

Cambias el nombre ruta por el nombre que tu quieras y el router funcionra con toda la normalidad 

Si quieres que tenga un 404 personalizados debes hacer los siguiente:

```javascript
      <Router defaultComponent={404Pages}>
        <Route path='/'  Component={HomePage}/>
      </Router>
```

cambias el 404Pages por el template que allas creado


# Creditos 
  midulive
  [Síguelo en su canal de YouTube](https://www.youtube.com/midulive "Síguelo en su canal de YouTube")


# Link
 link: https://github.com/ibarguen-dev/react-router-iba-dev

  puedes apoyarme dando una estrella al proyecto te lo agradeceria 

# Bages
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
