import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './components/test/test';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Test, DatePipe], // ✅ додано DatePipe
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // ✅ виправлено styleUrls
})
export class App {
  protected readonly title = signal('int_master');
  messageFromParent = 'Я твій батько';
  messageFromChild = '';
  today = new Date(); // ✅ звичайна дата
}

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
