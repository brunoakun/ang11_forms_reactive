import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarUrl } from 'src/shared/validador';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formContacto: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContacto = this.fb.group({
      nombre: ['', Validators.required],
      email: [''],
      url: ['', [Validators.required, ValidarUrl]],
      mensaje: ['']
    })
  }

  onSubmit(form: FormGroup) {
    console.log('valid?', form.valid);
    console.log('nombre', form.value.nombre);
    console.log('url', form.value.url);
  }

}
