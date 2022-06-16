import { JsonPipe } from '@angular/common';
import { AbstractControl } from '@angular/forms';
// VALIDACIONES CUSTOM

export function ValidarUrl(control: AbstractControl) {
    // Validar una url
    if (!control.value.startsWith('http')) {
        return { https: false };
    }
    if (!control.value.includes('.com')) {
        return { dominio: false };
    }

    return (null);
}