import { Intaches } from './intaches';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  myUrl : string="http://localhost:4000/task"

  constructor(private http : HttpClient) { }

  getTasks(){
    return this.http.get<Intaches[]>(this.myUrl)
  }

  AddTask(data : Intaches){
    return this.http.post<Intaches>(this.myUrl,data)

  }

  getOneTask(id :number){
    return this.http.get<Intaches>(`${this.myUrl}/${id}`)
  }

  putTask(id:number | undefined , data : any){
    return this.http.put(`${this.myUrl}/${id}`,data)
  }

  deleteTask(id :number | undefined){
    return this.http.delete(`${this.myUrl}/${id}`)
  }
  
}
