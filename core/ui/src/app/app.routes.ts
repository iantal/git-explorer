import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {Page1Component} from './pages/page1/page1.component';
import {Page2Component} from './pages/page2/page2.component';

export const routes: Routes = [
  {path: '', component: Page2Component},
  {path: 'page1', component: Page1Component}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
