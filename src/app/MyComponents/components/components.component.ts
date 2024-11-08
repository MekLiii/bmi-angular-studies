import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { ChildOutputComponent } from './child-output/child-output.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [FormsModule,ChildComponent, ChildOutputComponent,Component1Component,Component2Component ],
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

  msg=""
  messageToChild=""

  messageFromChild=""


  btnSendClick(){
    this.messageToChild = "perent msg: "+this.msg
    //alert(this.msg)
  }

  getMessage(info:string){
    this.messageFromChild=info
  }

}
