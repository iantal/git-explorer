import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitExplorerAngular';
  selectedLanguage: string;
  today: number = Date.now();

  constructor(private translate: TranslateService) {

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


}
