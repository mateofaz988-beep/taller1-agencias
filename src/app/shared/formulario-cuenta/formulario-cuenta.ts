import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { UsuarioServicio } from '../../services/usuario-servicio/usuario-servicio';
import { Usuario } from '../../models/usuario/usuario';

@Component({
  selector: 'app-formulario-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario-cuenta.html',
  styleUrl: './formulario-cuenta.css',
})
export class FormularioCuenta {

  private fb = inject(FormBuilder);
  private usuarioServicio = inject(UsuarioServicio);

  registroExitoso = false;

  reglaEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  reglaPassword = '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$';

  formCuenta = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(this.reglaEmail)]],
      password: ['', [Validators.required, Validators.pattern(this.reglaPassword)]],
      repeatPassword: ['', [Validators.required]],
    },
    { validators: this.validarClaves }
  );

  validarClaves(control: AbstractControl): ValidationErrors | null {
    const clave1 = control.get('password')?.value;
    const clave2 = control.get('repeatPassword')?.value;
    return clave1 === clave2 ? null : { noCoinciden: true };
  }

  registrar() {

    console.log("Entró al método"); 

    if (this.formCuenta.invalid) {
      console.log("Formulario inválido");
      return;
    }

    const nuevoUsuario: Usuario = {
      email: this.formCuenta.value.email ?? '',
      password: this.formCuenta.value.password ?? '',
      rol: 'CLIENTE'
    };

    this.usuarioServicio.postUsuario(nuevoUsuario)
      .subscribe({
        next: (resp) => {
          console.log('Guardado en Firebase:', resp);
          this.registroExitoso = true;
          this.formCuenta.reset();
        },
        error: (err) => {
          console.error('Error al guardar:', err);
        }
      });
  }
}