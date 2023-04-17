import { Intaches } from './../intaches';
import { Component, Output ,Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {

 

  @Input() personChild = {
    name: '',
    age : 0 ,
    level : ''
  }

  



}
