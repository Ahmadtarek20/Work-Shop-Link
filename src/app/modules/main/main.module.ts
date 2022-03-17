import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { NewsCardModule } from 'src/app/shared/news-card/news-card.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgSelectModule,
    NewsCardModule,
    //modules
    LayoutModule,
    CoreModule,
    SharedModule,
    LoaderModule,


    //Translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

  ]
})
export class MainModule { }
