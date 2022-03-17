import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { FontsService } from 'src/app/services/style/fonts.service';
import { ThemsService } from 'src/app/services/style/thems.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  title = 'TestLink';


  theme = localStorage.getItem('theme')
  constructor(
    public themeService: ThemsService,
    public sideBarService: SidebarService,
    public fontsService: FontsService,
    public languageService: ChangeLanguageService,
    public translate: TranslateService

  ) {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
      this.translate.use('ar')
    }
    else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'en')
      this.languageService.langauge.next('en')
      this.translate.use('en')
    } else {
      localStorage.setItem('lang', 'en')
      this.languageService.langauge.next('en')
      this.translate.use('en')
    }
    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');
  }


}
