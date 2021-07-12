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
  tarefas;
  novaTarefa;
  tarefaEditada;
  idListaSelecionada = 1;
  tituloTarefas

  ngOnInit(): void {
    this.getListaTodoService();
    this.getTarefasTodoService();
    
  }

  getListaTodoService(){
    this.todoService.getListaDeTarefas().then( data => {
      this.listas = data;
      JSON.stringify(this.listas);
      this.tituloTarefas = this.listas[0].title;
    });
    
  }
  
  popUpAdicionarNovaLista(){
    this.alert.alertaCadastroNovaListaDeTarefas().then( r =>{
      console.log(r)
      if(r.isConfirmed && r.value) {
        this.novaListaDeTarefa = r.value;
        this.adicionarListaTodoService();
      } else if(r.isDismissed){
        return;
      } else {
        this.alert.alertaPreenchaCampo();
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
      this.tarefas = data;
      JSON.stringify(this.tarefas);
    });
  }

  adicionarNovaTarefa(idSelecionado, novaTarefa){
    this.todoService.postNovaTarefa(idSelecionado, novaTarefa).then( data => {
      console.log(data);
      this.getTarefasTodoService()
      console.log("Post adicionar tarefa feito com sucesso ");
    });
  }

  editarNovaTarefa(idSelecionado, idTarefa, tarefaEditada){
    this.todoService.editarTarefa(idSelecionado, idTarefa, tarefaEditada).then( data => {
      console.log(data);
      this.getTarefasTodoService();
      console.log("Edição da tarefa feito com sucesso ");
    });
  }

  excluirNovaTarefa(){
    this.todoService.excluirTarefa().then( data => {
      console.log(data);
      console.log("Exclusão da tarefa feito com sucesso ");
    });
  }

  popupAdicionarNovaTarefa(){
    this.alert.alertaCadastroNovaTarefa().then( r =>{
      console.log(r)
      if(r.isConfirmed && r.value) {
        this.novaTarefa = r.value;
        this.adicionarNovaTarefa(this.idListaSelecionada, this.novaTarefa);
      } else if(r.isDismissed){
        return;
      } else {
        this.alert.alertaPreenchaCampo();
      }
      
    });
  }

  popupEditarTarefa(idTarefa){
    console.log("Id tarefa para ser editada" + idTarefa)
    this.alert.alertaCadastroNovaTarefa().then( r =>{
      console.log(r)
      if(r.isConfirmed && r.value) {
        this.tarefaEditada = r.value;
        this.editarNovaTarefa(this.idListaSelecionada, idTarefa, this.tarefaEditada);
      } else if(r.isDismissed){
        return;
      } else {
        this.alert.alertaPreenchaCampo();
      }
      
    });
  }
  // =================================================================================
  recuperarDadosDaLista(idLista){
    this.idListaSelecionada = idLista;
    this.recuperacaoTituloDaListaSelecionada();
  }

  recuperacaoTituloDaListaSelecionada (){
    for (let z = 0; z < this.listas.length; z++) {
      if(this.idListaSelecionada == this.listas[z].id) {
        this.tituloTarefas = this.listas[z].title;
      }      
    }
  }

 

}
