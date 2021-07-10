import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { promise } from 'protractor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getListaDeTarefas() {
    return new Promise((resolve, reject) => {

      this.http.get(environment.urlLista).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });

    });
  }

  postListaDeTarefas(novaTarefa) {
    return new Promise((resolve, reject) => {

      this.http.post(environment.urlLista, { "title": novaTarefa }).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });

    });
  }

  // ================================================================================
  getTarefas() {
    return new Promise((resolve, reject) => {

      this.http.get(environment.urlTarefas).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });

    });
  }

  postNovaTarefa() {
    return new Promise((resolve, reject) => {

      this.http.post(environment.urlTarefas, { "listId": 2, "title": "Teste" }).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });

    });
  }

  editarTarefa() {
    return new Promise((resolve, reject) => {
      this.http.put(environment.urlTarefas + '/4', { "listId": 2, "title": "Teste 2" }).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });
    });

  }

  excluirTarefa(){
    return new Promise((resolve, reject) => {
      this.http.delete(environment.urlTarefas + '/4').subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });
    });
  }
}
