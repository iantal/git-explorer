import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ExploreComponent} from './pages/explore/explore.component';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page2', component: ExploreComponent},
  {path: 'about', component: AboutComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
