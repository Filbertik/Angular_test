import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../directives/highlight';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule, HighlightDirective], // add module   add forms
  templateUrl: './test.html',
  styleUrls: ['./test.scss'], //  styleUrls adds
})
export class Test {
  title = 'Це інтерполяція !';
  firstName = 'Viktor';
  lastName = 'Kukharskyi';

  isEnabled: boolean = true; //switch of button
  isActive: boolean = false;
  isDisabled: boolean = true;

  isClickedState: boolean = false;

  inputText: string = ``;

  today = new Date();

  //======================
  @Input() childMessage: string = '';
  // childMessage = input<string>('');
  @Output() messageFromChild = new EventEmitter<string>();

  //======================

  getFullName() {
    return `I'm ${this.firstName} ${this.lastName}`;
  }

  toggleState() {
    this.isClickedState = true;
  }

  sendMessageToParent() {
    this.messageFromChild.emit('Я твій син!');
  }
}

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-test',
//   imports: [],
//   templateUrl: './test.html',
//   styleUrl: './test.scss',
// })
// export class Test {
//   title = 'Це  інтерполяція !';
//   firstName = 'Viktor';
//   lastName = 'Kukharskyi';

//   isEnabled: boolean = true;

//   isActive: boolean = true;
//   isDisabled: boolean = false;

//   getFullName() {
//     return `I'm  ${this.firstName}  ${this.lastName}`;
//   }
// }
