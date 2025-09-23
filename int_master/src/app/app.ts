import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // для *ngFor
import { Test } from './components/test/test'; // переконайся, що шлях правильний

@Component({
  selector: 'app-angular',
  standalone: true,
  imports: [CommonModule, Test], // *ngFor і Test
  templateUrl: './angular.html',
  styleUrls: ['./angular.scss'],
})
export class AngularComponent {
  questions = [
    { number: 1, question: 'Що таке Angular?', difficulty: 'easy' },
    { number: 2, question: 'Що таке TypeScript?', difficulty: 'medium' },
    { number: 3, question: 'Що таке RxJS?', difficulty: 'hard' },
  ];
}

// // ---------------------------------------
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common'; // для *ngFor
// import { DeferModule } from '@angular/core/rxjs-interop'; // для *defer
// import { Test } from '../test/test'; // шлях до твого standalone компонента

// @Component({
//   selector: 'app-angular',
//   standalone: true,
//   imports: [CommonModule, DeferModule, Test],
//   templateUrl: './angular.html',
//   styleUrls: ['./angular.scss'],
// })
// export class AngularComponent {
//   questions = [
//     { number: 1, question: 'Що таке Angular?', difficulty: 'easy' },
//     { number: 2, question: 'Що таке TypeScript?', difficulty: 'medium' },
//     { number: 3, question: 'Що таке RxJS?', difficulty: 'hard' },
//   ];
// }

// --------------------------------

// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule, DatePipe } from '@angular/common';
// import { Test } from './components/test/test';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, CommonModule, Test],
//   templateUrl: './app.html',
//   styleUrls: ['./app.scss'],
// })
// export class App {
//   protected readonly title = signal('int_master');
//   messageFromParent = 'Я твій батько';
//   messageFromChild = '';
//   today = new Date();
// }
// ---------------------------------------------
// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrls: ['./app.scss'], // ✅ виправлено styleUrls
// })
// export class App {
//   protected readonly title = signal('int_master');
//   messageFromParent = 'Я твій батько';
//   messageFromChild = '';
//   today = new Date(); // ✅ звичайна дата
// }

// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Test } from './components/test/test';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, Test, DatePipe],
//   templateUrl: './app.html',
//   styleUrls: './app.scss',
// })
// export class App {
//   protected readonly title = signal('int_master');
//   messageFromParent = 'Я твій батько';
//   // messageFromChild?: string; // 👈 додав
//   messageFromChild = '';
//   today = new Date();
// }
