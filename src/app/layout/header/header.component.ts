import { Component, OnInit } from '@angular/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { ThemsService } from 'src/app/services/style/thems.service';
;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  theme = localStorage.getItem('theme');
  darkMood: boolean = false;
  constructor(
    public sideBarService: SidebarService,
    public themeService: ThemsService,
    public languageService: ChangeLanguageService,


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
    } else if (localStorage.getItem('lang') == 'en') {
      localStorage.setItem('lang', 'ar')
      this.languageService.langauge.next('ar')
    }

    document
      .querySelector('body')!
      .setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr')
    document
      .querySelector('html')!
      .setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en')
  }


  changeTheme() {
    this.themeService.changeTheme();
    if (this.darkMood == false) {
      this.darkMood = true;
    } else {
      this.darkMood = false;
    }
  }
}
