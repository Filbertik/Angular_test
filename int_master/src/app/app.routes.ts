import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Angular } from './components/angular/angular';
import { Typescript } from './components/typescript/typescript';
import { Javascript } from './components/javascript/javascript';
import { Rxjx } from './components/rxjx/rxjx';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'angular', component: Angular },
  { path: 'typescript', component: Typescript },
  { path: 'javascript', component: Javascript },
  { path: 'rxjx', component: Rxjx },
  { path: '**', component: PageNotFound },
];

// import { Routes } from '@angular/router';

// export const routes: Routes = [];
