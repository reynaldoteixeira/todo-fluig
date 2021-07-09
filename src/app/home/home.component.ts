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

  lista;
  novaTarefa;

  ngOnInit(): void {
  }

  getListaTodoService(){
    this.todoService.getListaDeTarefas().then( data => {
      this.lista = data;
      console.log(this.lista);
    })
  }
  
  popUpAdicionarNovaLista(){
    this.alert.alertaCadastro().then( r =>{
      console.log(r)
      if(r.isConfirmed && r.value) {
        this.novaTarefa = r.value;
        this.adicionarListaTodoService();
      } else {
        this.alert.alertaPreenchaListaTarefas();
      }
      
    })

  }

  adicionarListaTodoService(){
    this.todoService.postListaDeTarefas(this.novaTarefa).then( () => {
      console.log("Post com sucesso ");
    });
    
  }

}
