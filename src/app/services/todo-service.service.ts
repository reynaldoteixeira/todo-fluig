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

      this.http.post(environment.urlLista, {"id":Number, "title": novaTarefa }).subscribe(res => {

        try {
          resolve(res);
        } catch (error) {
          reject(error);
        }

      });

    });
  }

}
