import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  labelItem: string = ''
  show: string = 'inActive'
  constructor(
    public sideBarService: SidebarService,
  ) { }

  ngOnInit() {
  }

  onToggleSideBar() {
    this.sideBarService.changeSideBar()
  }

  openMenu(label: string) {
    if (this.show == 'active') {
      this.show = 'inActive'
    } else {
      this.show = 'active'
    }
    this.labelItem = label
  }

  closeMenu() {
    this.show = 'inActive'
  }
}
