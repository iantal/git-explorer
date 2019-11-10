import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {TrendingRepositories} from "./components/TrendingRepositories";
import {TrendingRepositoriesService} from "./services/trendingRepositories.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitExplorerAngular';
  selectedLanguage: string;
  today: number = Date.now();
  trendingRepositories: TrendingRepositories;

  constructor(private translate: TranslateService, private trendingRepositoriesService: TrendingRepositoriesService) {

    translate.addLangs(['ro', 'en']);
    translate.setDefaultLang('ro');

    if (this.translate.currentLang === undefined) {
      this.selectedLanguage = this.translate.defaultLang;
    } else {
      this.selectedLanguage = this.translate.currentLang;
    }
    console.log(this.translate);
    setInterval(() => {
      this.today = Date.now();
    }, 60000);

    this.getTrendingRepositories();
  }

  onChangeLanguage(event) {
    console.log('event :');
    console.log(event);
    console.log(event.value);
    this.translate.setDefaultLang(event.value);
  }

  changeLanguage(language: string) {
    this.translate.setDefaultLang(language);
  }

  getTrendingRepositories() {
    this.trendingRepositoriesService.getAllTrendingRepositories().then((result) => {
      this.trendingRepositories = result;
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }

}
