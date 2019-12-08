import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Page2Component} from './pages/page2/page2.component';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page2', component: Page2Component},
  {path: 'about', component: AboutComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
