import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from './core/services/change-language.service';

import { SidebarService } from './core/services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Work-Shop-Link';
  constructor(
    public sideBarService: SidebarService,
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

  ngOnInit() {

  }

}
