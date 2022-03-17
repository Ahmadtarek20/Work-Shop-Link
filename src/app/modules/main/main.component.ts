import { Component, OnInit } from '@angular/core';
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

  ) {
  }

}
