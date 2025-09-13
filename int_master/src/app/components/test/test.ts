import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  title = 'Це  інтерполяція !';
  firstName = 'Viktor';
  lastName = 'Kukharskyi';

  isEnabled: boolean = true;

  getFullName() {
    return `I'm  ${this.firstName}  ${this.lastName}`;
  }
}
