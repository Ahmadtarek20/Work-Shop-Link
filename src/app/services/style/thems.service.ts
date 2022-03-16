import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemsService {
  peresentThemeSubject = new BehaviorSubject('theme-light');
  theme: any;

  constructor() { }

  getTheme() {
    this.theme = localStorage.getItem('theme');
    if (this.theme) {
      this.peresentThemeSubject.next(this.theme);
    } else {
      this.peresentThemeSubject.next('theme-light')
    }
  }

  changeTheme() {
    if (localStorage.getItem('theme') == "theme-dark") {
      this.peresentThemeSubject.next('theme-light');
      localStorage.setItem('theme', 'theme-light')
    } else {
      this.peresentThemeSubject.next('theme-dark');
      localStorage.setItem('theme', 'theme-dark')
    }
  }
}
