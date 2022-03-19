import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    public sideBarService: SidebarService,
  ) { }

  ngOnInit() {
  }

  onToggleSideBar() {
    this.sideBarService.changeSideBar()
  }
}
