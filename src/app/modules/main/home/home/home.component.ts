import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
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
  banaras: any = [];
  opportunities: any = [];
  numberOfBanner: any;
  labelOfBanner: any;
  dataOfBanner: any;
  secondDataOfBanner: any;
  constructor(
    private newsService: NewsService,
  ) { }

  ngOnInit() {

    this.banaras = [
      { id: 1, label: 'MISSION', data: 'YOUR BUSINESS', secondData: 'EXPANSION DESTINATION' },
      { id: 2, label: 'OutSource', data: 'Global IT', secondData: 'Engineering Experts' },
      { id: 3, label: 'DEPLOY', data: 'ACCELERATE', secondData: 'BUSINESS PRODUCTIVITY' },
      { id: 4, label: 'BUILD', data: 'FUTURISTIC', secondData: 'DIGITAL PLATFORMS' }
    ]
    this.opportunities = [
      { country: "Nigeria", sectors: "Real estate, Tourism", opportunity: 446 },
      { country: "Ethiopia", sectors: "Agriculture, Healthtech", opportunity: 557 },
      { country: "Egypt", sectors: "Real estate, Tourism", opportunity: 586 },
      { country: "Tanzania", sectors: "Fintech", opportunity: 226 },
      { country: "Kenya", sectors: "Healthtech", opportunity: 287 },
      { country: "Uganda", sectors: "Real estate", opportunity: 227 },
      { country: "Algeria", sectors: "Agriculture, Healthtech", opportunity: 27 },
      { country: "Sudan", sectors: "Tourism", opportunity: 775 },
    ]
    this.resetBanner()
    this.getNewsList();
    document.getElementsByClassName('d-non')[0].className = 'footer_spam border-right';

    document.getElementsByClassName('nav_list')[0].className = 'nav_list  border-bottom border-left';
    document.getElementsByClassName('nav_list_footer')[0].className = 'nav_list_footer flex justify-between text-center px-6 border-left';
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
      this.labelOfBanner = found.label
      this.dataOfBanner = found.data
      this.secondDataOfBanner = found.secondData
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
      this.labelOfBanner = found.label
      this.dataOfBanner = found.data
      this.secondDataOfBanner = found.secondData
    }
  }

  resetBanner() {
    this.numberOfBanner = this.banaras[0].id
    this.labelOfBanner = this.banaras[0].label
    this.dataOfBanner = this.banaras[0].data
    this.secondDataOfBanner = this.banaras[0].secondData
  }

}

