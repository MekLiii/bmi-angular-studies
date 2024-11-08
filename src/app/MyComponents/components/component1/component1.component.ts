import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../MyServices/message.service';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component {

  constructor (private messageService:MessageService){

  }

  msg=""


  btnSend(){
    this.messageService.sendMessage("msg from component1: "+this.msg)
    
  }

}
