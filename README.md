# Test técnico en Angular (SsR/SR)

La idea es realizar un proyecto en Angular que consuma nuestros componentes reusable, API de datos externos.

La premisa es la adaptación al uso de los componentes existentes, proponer mejoras y buenas prácticas desde el inicio, evaluar el uso de node, NPM, Scrum, GIT, branching y versioning del proyecto. Así mismo, seguir una historia funcional para nuevos features del proyecto.

## Requerimientos mínimos (14/10/2020)

Crear una nueva vista según la historia, usando los componentes existentes, adaptando hojas de estilos.
1. Crear un nuevo proyecto de Angular 8+ y agregarle GIT como control de versiones, 
2. Crear una vista y detalle (master/detail) para las licencias. [Definición](https://webapphuddle.com/master-detail-ui-pattern-design/) y [Ejemplo](https://github.com/tjvantoll/angular-master-detail)
3. Importar/agregar y utilizar los componentes en app/sharerd/reusable (Ver DOCUMENTATION.md)
4. Consumir los datos del API mockeada
5. Ver detalle del contenido de una licencia. HINT: Los datos deben ser pasado a la nueva vista ya precargados en el endpoint anterior, ejemplo: detalle(licencia: objecto).
6. (Opcional) Agregar o crear nuevos componentes reusables para mostrar información, sin importar la complejidad del componente, por ejemplo: Los estados:
 - “Ingresada” = ENTERED
 - “Autorizada” = AUTHORIZE
 - “Rechazada” = REJECTED
7. (Deseado) Formulario ABM (Alta/Baja/modificación) de una licencia (no es necesario que funcione)
8. (Suma) Se valora pruebas unitarias
9. (Deseado) Hacer un pull request o merge request a este repositorio
10. (Requerido) Enviar por email, el link del repositorio público y/o link del PR (o MR)


## Recursos:
- Data Mock: https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77
- Angular 8+
- Angular CLI
- Node +8
- NPM +6
- ng-boostrap (Angular Boostrap)

SECRET_KEY:  ```SE ENVIA VIA MAIL``` y se actualiza por cada test (participante)

Ejemplo: 
```
curl --header "secret-key:<SECRET_KEY>" --request GET https://api.jsonbin.io/b/5f0887eb5d4af74b0129dd77
```  

## Estructura

```
|- src
|   + app
|   |   + shared
|   |   |  - table
|   |   |  - toolbar
```

## Estimado
Duración: 4 días   
Sprint: 17   
Story point: 5  


## Historias funcionales

### H4.18 Ver Solicitudes de Licencia

**DESCRIPCIÓN**  
Como Autorizante, quiero poder visualizar las licencias de los empleados de mi unidad organizativa, para poder administrarlas.

**OBJETIVOS**  
El Autorizante necesita visualizar todas las licencias realizadas por los empleados de su Unidad Organizativa que tiene a su cargo, pudiendo ver sus datos y aprobar o rechazar las que se encuentren pendientes de autorización.

**CRITERIOS DE ACEPTACIÓN**

-   Por cada solicitud, se deben mostrar las columnas:
    -   **Id solicitud:** es el identificador único de la solicitud.
    -   **Nombre:** Es el nombre del empleado que solicitó la licencia.
    -   **Apellido:** Es el apellido del empleado que solicitó la licencia.
    -   **ID HR**: Es el ID del empleado en META4.       
    -   **CUIL:** Es el número de CUIL del empleado que solicitó la licencia.
    -   **Licencia:** Es la licencia con el que se creó la solicitud
    -   **Unidad Organizativa:** Es la unidad organizativa correspondiente de entre las seleccionadas en la carga de la solicitud.
    -   **Cargo**: Es el cargo en la unidad organizativa.
    -   **Fecha de Inicio:** Fecha de Inicio de la Licencia        
    -   **Fecha de Fin:** Fecha de Fin de la Licencia
    -   **Estado:** Se debe mostrar las licencias administrativas con estado distinta a “Anulada“.
    -   (opcional) La aplicación debe listar las solicitudes de licencia administrativa en estados “Ingresada”, “Autorizada”, “Rechazada” o “Documentación de Respaldo Pendiente”.
    -   (opcional) La aplicación debe permitir las siguientes acciones para las solicitudes de licencia administrativas listadas para un Autorizante:
        -   Ver Detalle de la licencia (Historia H4.2)

### H4.2 Ver detalle de Solicitud de Licencia

**DESCRIPCIÓN** 
Como usuario de Medicina Laboral, quiero ver el detalle de una solicitud de licencia médica, para poder contar con toda su información y evaluarla

**OBJETIVOS** 
La aplicación debe permitir al usuario ver el detalle de las solicitudes de licencia médicas que se encuentran en la búsqueda. Desde el detalle se puede acceder a la información de la licencia. También desde el detalle de la solicitud se puede acceder a acciones tales como anular solicitud, re asignarla, cambiar su estado y auditarla, entre otras.

**CRITERIOS DE ACEPTACIÓN**

La aplicación debe mostrar la información de la solicitud de licencia original correspondiente a:

-   El detalle de la licencia debe mostrar:
    -   **Id solicitud:** es el identificador único de la solicitud.
    -   **Nombre:** Es el nombre del empleado que solicitó la licencia.
    -   **Apellido:** Es el apellido del empleado que solicitó la licencia.
    -   **ID HR**: Es el ID del empleado en META4.       
    -   **CUIL:** Es el número de CUIL del empleado que solicitó la licencia.
    -   **Licencia:** Es la licencia con el que se creó la solicitud
    -   **Unidad Organizativa:** Es la unidad organizativa correspondiente de entre las seleccionadas en la carga de la solicitud.
    -   **Cargo**: Es el cargo en la unidad organizativa (JobSector).
    -   **Fecha de Inicio:** Fecha de Inicio de la Licencia        
    -   **Fecha de Fin:** Fecha de Fin de la Licencia
    -   **Diagnotico médico:**
    -   **Decisiones Médicas:**
    -   **Estado:** Se debe mostrar las licencias administrativas con estado distinta a “Anulada“.
    -   **Otros:** Se puede agregar el resto de los campos si lo deseas.

Actualizado: 14/10/2020 por [Daniel Naranjo](https://twitter.com/naranjodaniel)  

RECUERDE: Enviar el link público del repositorio para su revisión.
