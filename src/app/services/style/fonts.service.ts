import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class FontsService {

  fontsDefaultSubject: any = new BehaviorSubject<any>('default')

  constructor() { }

  changeFontSite(fontData: any) {

    if (fontData == 'x1') {
      this.fontsDefaultSubject.next('fontX1')
    } else if (fontData == 'x2') {
      this.fontsDefaultSubject.next('fontX2')
    } else {
      this.fontsDefaultSubject.next('fontX3')
    }
    console.log(fontData);

  }

}
