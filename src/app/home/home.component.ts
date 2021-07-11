import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service.service';
import { SweetAlert2Service } from '../services/sweet-alert2.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private todoService:TodoService,
    private alert:SweetAlert2Service 
    ) { }

  listas;
  novaListaDeTarefa;
  tarefa;
  novaTarefa;

  ngOnInit(): void {
    this.getListaTodoService();
    this.getTarefasTodoService();

  }

  getListaTodoService(){
    this.todoService.getListaDeTarefas().then( data => {
      this.listas = data;
      JSON.stringify(this.listas);
    });
  }
  
  popUpAdicionarNovaLista(){
    this.alert.alertaCadastro().then( r =>{
      console.log(r)
      if(r.isConfirmed && r.value) {
        this.novaListaDeTarefa = r.value;
        this.adicionarListaTodoService();
      } else {
        this.alert.alertaPreenchaListaTarefas();
      }
      
    });

  }

  adicionarListaTodoService(){
    this.todoService.postListaDeTarefas(this.novaListaDeTarefa).then( data => {
      console.log(data);
      this.getListaTodoService();
      console.log("Post da lista de tarefas com sucesso ");
    });
    
  }

  // ==============================================================================

  getTarefasTodoService(){
    this.todoService.getTarefas().then( data => {
      this.tarefa = data;
      // console.log('Tarefas' + this.tarefa);

      for (let x = 0; x < this.tarefa.length; x++) {
        const cadaTarefa = this.tarefa[x];
        console.log(cadaTarefa);
      }
    });
  }

  adicionarNovaTarefa(){
    this.todoService.postNovaTarefa().then( data => {
      console.log(data);
      console.log("Post adicionar tarefa feito com sucesso ");
    });
  }

  editarNovaTarefa(){
    this.todoService.editarTarefa().then( data => {
      console.log(data);
      console.log("Edição da tarefa feito com sucesso ");
    });
  }

  excluirNovaTarefa(){
    this.todoService.excluirTarefa().then( data => {
      console.log(data);
      console.log("Exclusão da tarefa feito com sucesso ");
    });
  }

}
