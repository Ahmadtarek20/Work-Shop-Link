import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/Models/news';
import { NewsService } from 'src/app/services/api/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  newsItem!: News;
  id!: Number;
  newsList = [];
  allNewsList = [];
  pageCount = 3;
  pageNumber = 1;
  pages: Number[] = [];
  loadingError = false
  loading = false
  constructor(
    private newsService: NewsService, private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(prams => {
      this.id = prams.id;
    })
    this.getNewsItem();
    document.getElementsByClassName('footer_spam')[0].className = 'd-non';
    document.getElementsByClassName('nav_list')[0].className = 'nav_list  border-bottom border-non';
    document.getElementsByClassName('nav_list_footer')[0].className = 'nav_list_footer flex justify-between text-center px-6 border-non';
  }
  getNewsList() {
    const params = {
      // any prams
    };
    this.newsService.getNewsList(params).subscribe((res: any) => {
      this.newsList = res.News;
      this.allNewsList = res.News;
      this.pagination(this.newsList.length)
    });
  }

  pagination(numberOfItems: any) {
    const numberOfPages = Math.ceil(numberOfItems / this.pageCount);
    this.pages = [];
    for (let index = 0; index < numberOfPages; index++) {
      this.pages.push(index + 1);
    }
    this.newsList = this.allNewsList.slice(0, this.pageCount);
  }


  getNewsItem() {
    this.loading = true
    this.newsService.getNewsItem(this.id).subscribe((res: any) => {
      this.newsItem = res;
      this.getNewsList();
    });
    this.loading = false
    this.loadingError = false
  }
  favoriteIcon(newsItem: any) {
    newsItem.liked = true
  }
}
