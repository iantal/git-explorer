import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitExplorer';
  selectedLanguage: string;
  today: number = Date.now();
  currentLanguageEng: boolean;
  loading: boolean = false;
  trendingRepositoriesColumns: Array<any> = [];

  constructor(private translate: TranslateService) {

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
}
