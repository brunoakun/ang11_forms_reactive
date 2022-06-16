# Ang11FormsReactive

Basado en https://www.digitalocean.com/community/tutorials/angular-reactive-forms-introduction
 ## 1.-Modificar tsconfig,json
```
    "strict": false, 
```
## 2.-Instalar bootstrap
```
"styles": [
        "src/styles.css",
        "./node_modules/bootstrap/dist/css/bootstrap.css"
    ],
"scripts": [
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```
## 3.-Modificar app.module.ts
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