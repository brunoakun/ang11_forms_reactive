# Ang11FormsReactive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.
 ## Modificar tsconfig,json
```
    "strict": false, 
```
## Instalar bootstrap
```
"styles": [
        "src/styles.css",
        "./node_modules/bootstrap/dist/css/bootstrap.css"
    ],
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```
## Modificar app.module.ts
```
@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```