import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-output',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.css'
})
export class ChildOutputComponent {

  msg=""

  @Output() childMessage = new EventEmitter<string>()

  btnSend(){
    this.childMessage.emit("info from child: " + this.msg);
  }

}
