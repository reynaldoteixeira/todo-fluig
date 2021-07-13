import { Component, HostListener, OnInit } from '@angular/core';
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
  tituloTarefas;

  isMobile = false;
  windowWidth;

  ngOnInit(): void {
    this.getListaTodoService();
    this.getTarefasTodoService();
    
  }

  // Observar tamanho da página
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth <= 768){
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

  // ================Funções lista de tarefas=======================
  getListaTodoService(){
    this.todoService.getListaDeTarefas().then( data => {
      this.listas = data;
      JSON.stringify(this.listas);
      this.tituloTarefas = this.listas[0].title;
    });
    
  }
  
  popUpAdicionarNovaLista(){
    this.alert.alertaCadastroNovaListaDeTarefas().then( r =>{
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

  popupExcluirListaDeTarefas(){
    this.alert.alertaExcluirListaDeTarefa().then(r => {
      if(r.isConfirmed){
        this.excluirListaDeTarefa(this.idListaSelecionada);
      }
    });
  }

  adicionarListaTodoService(){
    this.todoService.postListaDeTarefas(this.novaListaDeTarefa).then( data => {
      this.getListaTodoService();
      console.log("Post da lista de tarefas com sucesso ");
    });
    
  }

  excluirListaDeTarefa(idListaTarefa){
    this.todoService.excluirListaDeTarefa(idListaTarefa).then( data => {
      this.getListaTodoService();
      this.idListaSelecionada = this.idListaSelecionada + 1
      console.log("Exclusão da lista de tarefa feito com sucesso ");
    });
  }

  // ==============================================================================

  // ===========Funções das tarefas================================================
  getTarefasTodoService(){
    this.todoService.getTarefas().then( data => {
      this.tarefas = data;
      JSON.stringify(this.tarefas);
    });
  }

  adicionarNovaTarefa(idSelecionado, novaTarefa){
    this.todoService.postNovaTarefa(idSelecionado, novaTarefa).then( data => {
      this.getTarefasTodoService()
      console.log("Post adicionar tarefa feito com sucesso ");
    });
  }

  editarNovaTarefa(idSelecionado, idTarefa, tarefaEditada){
    this.todoService.editarTarefa(idSelecionado, idTarefa, tarefaEditada).then( data => {
      this.getTarefasTodoService();
      console.log("Edição da tarefa feito com sucesso ");
    });
  }

  excluirNovaTarefa(idTarefa){
    this.todoService.excluirTarefa(idTarefa).then( data => {
      this.getTarefasTodoService();
      console.log("Exclusão da tarefa feito com sucesso ");
    });
  }

  popupAdicionarNovaTarefa(){
    this.alert.alertaCadastroNovaTarefa().then( r =>{
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
    this.alert.alertaCadastroNovaTarefa().then( r =>{
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

  popupExcluirTarefa(idTarefa){
    this.alert.alertaExcluirTarefa().then(r => {
      if(r.isConfirmed){
        this.excluirNovaTarefa(idTarefa);
      }
    });
  }
  // =================================================================================

  // Funções para imprimir o título da lista selecionada
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
  // =================================================================================

 

}
