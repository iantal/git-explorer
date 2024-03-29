import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MatKeyboardModule} from '@ngx-material-keyboard/core';
import {
  MAT_DATE_LOCALE,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule
} from '@angular/material';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppRoutes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataViewModule} from 'primeng/dataview';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import {ChartsModule, ThemeService} from 'ng2-charts';
import {NumberPickerModule} from 'ng-number-picker';
import {
  CalendarModule, ContextMenuModule,
  DropdownModule, GMapModule,
  InputTextareaModule,
  InputTextModule,
  MessageService,
  MessagesModule, OrderListModule, PanelModule,
  SplitButtonModule
} from 'primeng/primeng';
import {FormsModule} from "@angular/forms";
import {TrendingRepositoriesService} from "./services/trendingRepositories.service";
import {Service2Service} from "./services/service2.service";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import { TrendingRepositoriesComponent } from './pages/trending-repositories/trending-repositories.component';
import { TrendingDevelopersComponent } from './pages/trending-developers/trending-developers.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { SearchComponent } from './pages/search/search.component';

import {TabViewModule} from 'primeng/tabview';
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TrendingRepositoriesComponent,
    TrendingDevelopersComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    DataViewModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ButtonModule,
    HttpClientModule,
    DialogModule,
    TabViewModule,
    TableModule, ChartModule, ChartsModule, NumberPickerModule, CalendarModule, SelectButtonModule,
    FormsModule, MatNativeDateModule, MatDatepickerModule, SplitButtonModule,
    MatFormFieldModule, MatInputModule, InputTextModule, InputTextareaModule,
    DropdownModule, MatKeyboardModule, MessagesModule, MatIconModule, MatListModule, OrderListModule, PanelModule, ContextMenuModule, GMapModule
  ],
  providers: [{provide: MAT_DATE_LOCALE, useValue: 'ro'},
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    TrendingRepositoriesService, Service2Service, ThemeService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
