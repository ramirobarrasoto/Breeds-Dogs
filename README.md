
# Individual Project - Dogs with <i>thedogapi </i> 

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Desafio del proyecto

El proyecto tendrá un tiempo de entrega máximo de tres semanas.

Adicionalmente será necesario que creen desde psql una base de datos llamada `dogs`

El contenido de `client` fue creado usando: Create React App.

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

## Elementos del proyecto:


- [ ]  Barra de navegación: botones para poder cambiar el ordenamiento de las razas (por nombre o por peso), botones para filtrar por raza de la DB o existente en la API.
- [ ]  Home: renderiza cartas de razas que incluyen una foto, nombre, tipo de raza y un boton para acceder a mas detalles de la raza.
- [ ]  Detalle de la raza seleccionada: incluye todos los datos de la raza (tamaño, peso, imagen, tiempo de vida, temperamentos, etc).
- [ ]  Formulario de creación: Crea una raza con sus respectivos datos (detalle de la raza) y almacena en la base de datos.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintas razas de perro junto con información relevante de las mismas utilizando la api externa [the dog api](https://thedogapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar perros
  - Filtrarlos / Ordenarlos
  - Agregar nuevos perros


#### Frontend

Se debe desarrolló una aplicación de React/Redux que contiene las siguientes pantallas/rutas.

__Pagina inicial__: una landing page con
- [ ] Una imagen de fondo representativa al proyecto
- [ ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: contiene
- [ ] Input de búsqueda para encontrar razas de perros por nombre
- [ ] Área donde se verá el listado de razas de perros. Muestra:
  - Imagen
  - Nombre
  - Temperamento
- [ ] Opciones para filtrar por por temperamento y por raza existente o agregada por nosotros
- [ ] Opciones para ordenar tanto ascendentemente como descendentemente las razas de perro por orden alfabético y por peso
- [ ] Paginado para buscar y mostrar las siguientes razas

__IMPORTANTE__: Dentro de la Ruta Principal se muestran tanto las razas de perros traidas desde la API como también las de la base de datos.

__Ruta de detalle de raza de perro__: contiene
- [ ] Los campos mostrados en la ruta principal para cada raza (imagen, nombre y temperamento)
- [ ] Altura
- [ ] Peso
- [ ] Años de vida

__Ruta de creación de raza de perro__: contiene
- [ ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Altura (Diferenciar entre altura mínima y máxima)
  - Peso (Diferenciar entre peso mínimo y máximo)
  - Años de vida
- [ ] Posibilidad de agregar uno o más temperamentos
- [ ] Opción de crear una nueva raza de perro

#### Base de datos

El modelo de la base de datos tiene las siguientes entidades:

- [ ] Raza con las siguientes propiedades:
  - ID 
  - Nombre 
  - Altura 
  - Peso 
  - Años de vida
- [ ] Temperamento con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades es de muchos a muchos ya que una raza de perro puede tener varios "temperamentos" en simultaneo y, a su vez, un "temperamento" puede corresponder a múltiples razas de perros. Por ejemplo, la raza `pug` es dócil, inteligente y sociable (entre otras). Pero a su vez existen otras razas de perro que también son sociables o inteligentes.


#### Backend

Se desarrolló un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /dogs__:
  - Obtiene un listado de las primeras 8 razas de perro
  - Devuelve solo los datos necesarios para la ruta principal
- [ ] __GET /dogs?name="..."__:
  - Obtiene un listado de las primeras 8 razas de perro que contengan la palabra ingresada como query parameter
  - Si no existe ninguna raza de perro muestra un mensaje adecuado
- [ ] __GET /dogs/{idRaza}__:
  - Obtiene el detalle de una raza de perro en particular
  - Devuelve solo los datos pedidos en la ruta de detalle de raza de perro
  - Incluye los temperamentos asociados
- [ ] __GET /temperament__:
  - Obtiene todos los temperamentos posibles
  - Los temperamentos fueron previamente cargados a la base de datos desde la API
- [ ] __POST /dog__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
  - Crea una raza de perro en la base de datos


