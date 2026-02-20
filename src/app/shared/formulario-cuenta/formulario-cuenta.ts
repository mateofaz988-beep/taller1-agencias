import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {

  private fb = inject(FormBuilder);

  registroExitoso = false;

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formCuenta = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
     password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      comentario: ['', [Validators.required,]],
      repeatPassword: ['', [Validators.required]],
    },
    { validators: this.validarClaves }
  );


  validarClaves(control: AbstractControl): ValidationErrors | null {
   const clave1 = control.get('password')?.value;
    const clave2 = control.get('repeatPassword')?.value;
    return clave1 === clave2 ? null : { noCoinciden: true };
  }


  mostrarError(campo: string, tipoError: string): boolean {
    const input = this.formCuenta.get(campo);

    if (input && input.invalid && input.touched) {
      return input.hasError(tipoError);
    }
    return false;
  }


  registrar() {
    if(this.formCuenta.valid){

      //CREA UN OBJETO ESPECIAL QIE FORMATEALOS DATOS DEL FORMULARIO COMO UNA URL
      const contenido = new URLSearchParams();
      contenido.set('form-name', 'contacto');
      contenido.set('email', this.formCuenta.value.email ?? '');
      contenido.set('comentario', this.formCuenta.value.comentario ?? '');


      /// promesa:funcion  especial de js que se usa par ahcer peticiones http atravez de la red

      fetch( '/',{
        method:'POST',
        //INDICAR QUE LOS DATOS SE VAN A ENVIAR ESTAN CODFICADOS COMO UNA URL NO JSON
        headers:{'Content-Type':"application/x-www-form-urlencoded"},
        //convertir todo el objeto a una cadena  de texto lista 
        body:contenido.toString()
         })
        //si la promesa se cumple
        .then(()=>{
          alert("Enviado con exito ");
          this.formCuenta.reset();
        })
        //si la promesa no se cumple
        .catch((error)=>
          console.log("no se puede enviar los datos",error));
        }

}
  }

