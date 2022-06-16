# Ang11FormsReactive

Basado en https://www.digitalocean.com/community/tutorials/angular-reactive-forms-introduction
 ## config 1.-Modificar tsconfig.json
```
    "strict": false, 
```
## config 2.-Instalar bootstrap
-npm install bootstrap
```
"styles": [
        "src/styles.css",
        "./node_modules/bootstrap/dist/css/bootstrap.css"
    ],
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```
## 1.-Modificar app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule   // <--------- 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 2.-Crear un Custom Validator
-crear el fichero "src/shared/validador.ts"
```
// Validar una URL
import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { invalidUrl: true };
  }
  return null;
}
```