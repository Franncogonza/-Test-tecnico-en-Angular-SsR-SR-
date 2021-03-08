# Reusable components

**Note:** Document in progress, se actualizara a medida que se va construyendo. 

## Folder structure

```
|- src
|   + app
|   |   + shared
|   |   |  - table
|   |   |  - toolbar
```

## table

Este componente permite crear una grilla o tabla de contenido a traves de un objecto:

Parametro: `data` 
Contenido: Datos de la licencia
Tipo: objecto
Requerido: Si

Parametro: `columns`
Tipo: objecto
Requerido: Si

```
const columns = [
    { headerName: 'Titulo A', field: 'a-field' },
    { headerName: 'Titulo B', field: 'b-field' },
    { headerName: 'Titulo C', field: 'c-field' },
];
```

```
<reusable-table *ngIf="dataLicense.length >0"
    [data]="dataLicense"
    [columns]="columns"
    [filters]="[]"
    [defaults]="[]"
    [paginator]="true"
    [dataChange]="dataChange"
    (returnActions)="actionDemo($event)"
    (returnData)="getDemo($event)"
    (returnModal)="actionModal($event)">
</reusable-table>
```



## toolbar

Este componente genera la pestaña o tab de ubicacion (tipo breadcumbs) en cada sección, tiene algunos parametros opcionales.

Parametro: `section` 
Tipo: string
Requerido: No

Parametro: `title`
Tipo: string
Requerido: No

Parametro: `linkTo` 
Tipo: string
Requerido: No

```
<reusable-toolbar
    [section]="'Titulo 1'"
    [title]="'Subtitulo '"
    [linkTo]="'otro-componente'"
>
</reusable-toolbar>
```


 

 
 

Actualizado: 13/07/2020 por [Daniel Naranjo](https://twitter.com/naranjodaniel)  

