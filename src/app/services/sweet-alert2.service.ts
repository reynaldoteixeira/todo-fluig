import { Injectable } from '@angular/core';
import  Swal  from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SweetAlert2Service {
  // novaTerefa;

  constructor() { }

  alertaCadastroNovaListaDeTarefas(){
   return Swal.fire({
      title: 'Insira uma nova lista de tarefas!',
      input:'text',
      showCloseButton:true,
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Confirmar',
    });
  }

  alertaPreenchaCampo(){
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Necessário preencher o campo!',
    })
  }

  alertaCadastroNovaTarefa(){
    return Swal.fire({
      title: 'Insira uma nova tarefa!',
      input:'text',
      showCloseButton:true,
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Confirmar',
    });
  }

  alertaEditarTarefa(){
    return Swal.fire({
      title: 'Insira o novo título!',
      input:'text',
      showCloseButton:true,
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Confirmar',
    });
  }




}

