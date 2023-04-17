import { Intaches } from './../intaches';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private servicesservice : ServicesService) {}

  ngOnInit(): void {
    this.servicesservice.getTasks().subscribe((response)=>{
      this.task=response
    })
  }
   
  person ={
    name : 'mohammed',
    age : 22,
    level : 'BAC +3'
  }

 task : Intaches[]=[]

 myTASKS : Intaches={

  nom:"",
  priorite:"",
  Etat:"",
  date :""

 }






 editTaaask : boolean =false
    
 saveTask(){
  this.servicesservice.AddTask(this.myTASKS).subscribe((response)=>{
  this.task=[...this.task,response]
  this.initTask()
  })
 }


 initTask(){
  this.myTASKS={
    nom:"",
    priorite:"",
    Etat:"",
    date :""
  }

}
supTask(id:number| undefined){

  this.servicesservice.deleteTask(id).subscribe((response)=>this.task=this.task.filter(taskk=>taskk.id !==id))

}

updateTask (){
  let{id,nom,priorite,Etat,date}=this.myTASKS

  this.servicesservice.putTask(id,{nom,priorite,Etat,date}).subscribe((response =>{
    this.editTaaask=false
    this.initTask()

  }))

  
}

editTask(data : Intaches){
  this.myTASKS = data
  this.editTaaask=true

}
  




  



}
