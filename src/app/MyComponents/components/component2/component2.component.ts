import { Component } from '@angular/core';
import { MessageService } from '../../../MyServices/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component {

  message=""

  subscription:Subscription

  constructor(private messageService:MessageService){

    this.subscription = this.messageService.getMessage().subscribe(msg=>{
      this.message = msg
    })

  }

}
