import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { FontsService } from 'src/app/services/style/fonts.service';
import { ThemsService } from 'src/app/services/style/thems.service';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = localStorage.getItem('theme');
  constructor(
    public sideBarService: SidebarService,
    public themeService: ThemsService,
    public languageService: ChangeLanguageService,
    public fontsService: FontsService,
    private translate: TranslateService,

  ) { }

  ngOnInit() {

  }


  onToggleSideBar() {
    this.sideBarService.changeSideBar()
  }

  changeLanguage() {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'en')
      this.languageService.langauge.next('en')
      this.translate.use('en')
    } else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
      this.translate.use('ar')
    }
    document
      .querySelector('body')!
      .setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr')
    document
      .querySelector('html')!
      .setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en')
  }

  changFont(fontX: any) {
    this.fontsService.changeFontSite(fontX)
  }

  changeTheme() {
    this.themeService.changeTheme();
  }
}
