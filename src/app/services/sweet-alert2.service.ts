import { Injectable } from '@angular/core';
import  Swal  from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {
  // novaTerefa;

  constructor() { }

  alertaCadastro(){
   return Swal.fire({
      title: 'Insira uma nova lista de tarefas!',
      input:'text',
      showCloseButton:true,
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Confirmar',
    });
  }

  alertaPreenchaListaTarefas(){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Necessário preencher o campo!',
    })
  }


}

