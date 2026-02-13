import { Component, inject, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { UsuarioServicio } from '../../services/usuario-servicio/usuario-servicio';
import { Usuario } from '../../models/usuario/usuario';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  private servicioUsuario = inject(UsuarioServicio);
 
  listaUsuarios = signal<Usuario[]>([]);

  editando = false;

  nuevoUsuario: Usuario = {
    name: '',
    email: '',
    phone: '',
  };

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.servicioUsuario.getUsuarios().subscribe(usuarios => {
      this.listaUsuarios.set(usuarios);
    })
  }

  guardarUsuario() {
    if (this.editando && this.nuevoUsuario.id) {
      this.servicioUsuario.putUsuario(this.nuevoUsuario.id, this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      })
    }
    else {
      this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(() => {
        this.obtenerUsuarios();
        this.resetear();
      })
    }
  }

  //metodo para eliminar
  eliminarUsuario(id: string) {
    if (confirm('¿Desea eliminar este usuario?')) {
      this.servicioUsuario.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  //metodo para poner los datos seleccionados en el formulario para editar
  seleccionarParaEditar(user: Usuario) {
    this.editando = true;
    this.nuevoUsuario = { ...user };
  }

  //metodo para limpiar el formulario y salir del modo edicion
  resetear() {
    this.editando = false;
    this.nuevoUsuario = { name: '', email: '', phone: '' };
  }
}




//Guardar nuevo usuario
//guardarUsuario(){
//this.servicioUsuario.postUsuario(this.nuevoUsuario).subscribe(usuarioId =>{
//... Spread Operador : combina el nuevo usuario con la lista existente, creando una nueva lista con el nuevo usuario al principio
//this.listaUsuarios.set([usuarioId,...this.listaUsuarios()]);
//limpiar el formulario
//this.nuevoUsuario = {
// name:'',
//email:'',
//phone:''
//};
// })
//}