import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrls: ['./test.scss'], //  styleUrls
})
export class Test {
  title = 'Це інтерполяція !';
  firstName = 'Viktor';
  lastName = 'Kukharskyi';

  isEnabled: boolean = false; //switch of button
  isActive: boolean = false;
  isDisabled: boolean = true;

  getFullName() {
    return `I'm ${this.firstName} ${this.lastName}`;
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
