**Documentación Code Challenge**

1. *Dependencias*

Las dependencias que se utilizaron es éste proyecto fueron:
- Eslint para correcciones y legibilidad del código.
- Jest para realizar los test.
- Express para levantar nuestro servidor.

2. *Diseño de componentes*

- Se creó un archivo "reader" para leer el archivo .json.
- Se creó un archivo de "ExplorerServices" para manipular y obtener información específica del archivo .json.
  *Contiene 3 métodos, el primero obtiene la lista total de estudiantes con todos los campos, el segundo filtra la lista por certificación y después regresa un arreglo con los emails del filtro, el tercero filtra los estudiantes por creditos y después regresa un arreglo de los nombres que cumplan con el filtro.*
- Se creo un archivo "ExplorerController" para utilizar los métodos en "explorerServices" y que sea el punto de comunicación con el "server".
  *Contiene 3 métodos que utilizan los parámetros de los métodos en "ExplorerServices", el primero para leer todos los estudiantes, el segundo para obtener los email por certificación, dando la opción de indicar true o false para el certificado, el tercero para obtener los estudiantes por cantidad de créditos, dando la opción de indicar cualquier número.*
- Se levantó el server y se definieron en él los endpoints solicitados.
  *Se trabaja con los métodos de "ExplorerController", el primer endpoint no recibe ningun parámetro, solo se indica el método para obtener la lista, el segundo endpoint recibe el método, indicando que el valor de certificación debe ser true, el tercer endpoint recibe el método, indicando el numero 500 para obtener los alumnos con credito mayor a 500.* 
- Se crearon los test necesarios para probar el funcionamiento de cada archivo.

3. *Funcionamiento del API*

Accedemos al APIcon la ruta localhost:3000/
Se solicitó crear 3 endpoints, a los cuales se les asigno las siguientes rutas:
- "/v1/students/students" para obtener la lista de todos los estudiantes con todos sus campos
- "/v1/students/certification/email" para obtener la lista de emails de los estudiantes que cuentan con una certificación, también se puede cambiar en la configuración en el endpoint para obtener aquellos que no tienen certificado.
- "/v1/students/credits/above500" para obtener la lista de estudiantes que tienen creditos por arriba de 500, de igual modo, en la configuración del endpoint se puede modificar para conocer los estudiantes por arriba de cualquier número que se indique.
 
Ejemplo: Para solicitar la lista de emails de estudiantes con certificación, solo se necesita ingresar la dirección: localhost:3000/v1/students/certification/email
