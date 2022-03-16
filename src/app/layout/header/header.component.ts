import { Component, OnInit } from '@angular/core';
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
    public themeService: ThemsService

  ) { }

  ngOnInit() {

  }


  onToggleSideBar() {
    this.sideBarService.changeSideBar()
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
