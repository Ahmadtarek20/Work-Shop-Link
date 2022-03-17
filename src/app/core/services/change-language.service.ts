import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeLanguageService {
  langauge: any = new BehaviorSubject<any>('en')
  constructor() {
    if (localStorage.getItem('lang') == 'en') {
      this.langauge.next('en')
    } else {
      this.langauge.next('ar')
    }


  }

}
