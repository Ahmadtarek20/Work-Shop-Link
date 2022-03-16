import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from './news-card.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [NewsCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    NgSelectModule,

  ],
  exports: [NewsCardComponent]
})
export class NewsCardModule { }
