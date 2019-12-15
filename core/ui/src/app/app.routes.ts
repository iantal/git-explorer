import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ExploreComponent} from './pages/explore/explore.component';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {TrendingRepositoriesComponent} from "./pages/trending-repositories/trending-repositories.component";
import {TrendingDevelopersComponent} from "./pages/trending-developers/trending-developers.component";
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'page2', component: ExploreComponent},
  {path: 'about', component: AboutComponent},
  {path: 'repositories', component: TrendingRepositoriesComponent},
  {path: 'developers', component: TrendingDevelopersComponent},
  {path: 'search', component: SearchComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
