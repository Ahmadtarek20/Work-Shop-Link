import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { BANARAS } from 'src/app/Models/banaras';
import { OPPORTUNITIES } from 'src/app/Models/opportunities';
import { NewsService } from 'src/app/services/api/news.service';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsList = [];
  loadingError = false
  loading = false
  banaras: any = BANARAS;
  opportunities: any = OPPORTUNITIES;
  numberOfBanner: any;
  labelOfBanner: any;
  dataOfBanner: any;
  secondDataOfBanner: any;
  urlBanner: any;

  constructor(
    private newsService: NewsService,
    public languageService: ChangeLanguageService,

  ) { }

  ngOnInit() {
    this.resetBanner()
    this.getNewsList();

    document.getElementsByClassName('nav_list')[0].className = 'nav_list  border-bottom border-left';
    document.getElementsByClassName('nav_list_footer')[0].className = 'nav_list_footer flex justify-between text-center px-6 border-left';
    document.getElementsByClassName('footer_spam')[0].className = 'footer_spam border-right';

  }
  getNewsList() {
    this.loading = true
    const params = {
      // any prams
    };
    this.newsService.getNewsList(params).subscribe((res: any) => {
      this.newsList = res.News.filter((el: any) => el.showOnHomepage == "yes");

      this.newsList.forEach((element: any) => {
        element.liked = false
      });
    });
    this.loading = false
    this.loadingError = false
  }

  next() {
    let newNumber = this.numberOfBanner + 1
    if (newNumber <= this.banaras.length) {
      this.numberOfBanner = newNumber
      const found = this.banaras.find((element: any) => element.id == newNumber);
      this.numberOfBanner = found.id
      this.labelOfBanner = found.Category
      this.dataOfBanner = found.Title
      this.secondDataOfBanner = found.secondTitle
      this.urlBanner = found.url
    } else {
      this.resetBanner()
    }
  }

  previous() {
    let newNumber = this.numberOfBanner - 1
    if (newNumber <= 0) {
      this.numberOfBanner = 1
      this.resetBanner()
    } else {
      this.numberOfBanner = newNumber
      const found = this.banaras.find((element: any) => element.id == newNumber);
      this.numberOfBanner = found.id
      this.labelOfBanner = found.Category
      this.dataOfBanner = found.Title
      this.secondDataOfBanner = found.secondTitle
      this.urlBanner = found.url
    }
  }

  resetBanner() {
    this.numberOfBanner = this.banaras[0].id
    this.labelOfBanner = this.banaras[0].Category
    this.dataOfBanner = this.banaras[0].Title
    this.secondDataOfBanner = this.banaras[0].secondTitle
    this.urlBanner = this.banaras[0].url
  }

  onClickNewTab(event: any) {
    if (event != '') {
      window.open(event);
    }
  }

}

