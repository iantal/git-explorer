import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TrendingRepositories} from "./components/TrendingRepositories";
import {TrendingRepositoriesService} from "./services/trendingRepositories.service";
import {LazyLoadEvent} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitExplorer';
  selectedLanguage: string;
  today: number = Date.now();
  totalTrendingRepositories: TrendingRepositories[];
  pageTrendingRepositories: TrendingRepositories[];
  currentLanguageEng: boolean;
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];
  totalNumberOfTrendingRepositories: number;

  constructor(private translate: TranslateService, private trendingRepositoriesService: TrendingRepositoriesService) {

    translate.addLangs(['ro', 'en']);
    translate.setDefaultLang('en');
    this.currentLanguageEng = true;

    if (this.translate.currentLang === undefined) {
      this.selectedLanguage = this.translate.defaultLang;
    } else {
      this.selectedLanguage = this.translate.currentLang;
    }
    console.log(this.translate);
    setInterval(() => {
      this.today = Date.now();
    }, 60000);

    // this.getTrendingRepositories();

    this.trendingRepositoriesColumns = [
      {field: 'author', header: 'Author'},
      {field: 'name', header: 'Name'},
      {field: 'language', header: 'Language'}
    ];
  }

  changeLanguage(language: string) {
    this.translate.setDefaultLang(language);

    if (language != this.translate.langs[1]) {
      this.currentLanguageEng = false;
    } else {
      this.currentLanguageEng = true;
    }
  }

  getTrendingRepositories(event: LazyLoadEvent) {
    this.loading = true;
    this.trendingRepositoriesService.getAllTrendingRepositories().then((result) => {
      this.totalTrendingRepositories = result;
      this.pageTrendingRepositories = result.slice(event.first, (event.first + event.rows));
      console.log(result);
      this.totalNumberOfTrendingRepositories = this.totalTrendingRepositories.length;
      this.loading = false;
    }).catch((error) => {
      console.error(error);
    });
    this.loading = false;
  }

  loadTrendingRepositoriesLazy(event: LazyLoadEvent) {
      this.loading = true;
      this.getTrendingRepositories(event);
      this.loading = false;
  }
}
