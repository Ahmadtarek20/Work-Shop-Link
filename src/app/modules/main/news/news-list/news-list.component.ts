import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NewsService } from 'src/app/services/api/news.service';
import { News } from './../../../../Models/news';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: any = [];
  allNewsList = [];
  pageCount = 6;
  pageNumber = 1;
  pages: Number[] = [];
  loadingError = false
  loading = false
  constructor(
    private newsService: NewsService,
  ) { }

  filterForm = new FormGroup({
    from: new FormControl(null),
    to: new FormControl(null),
    searchInput: new FormControl(null),
  })

  ngOnInit(): void {
    this.getNewsList();
    document.getElementsByClassName('footer_spam')[0].className = 'd-non';
    document.getElementsByClassName('nav_list')[0].className = 'nav_list  border-bottom border-non';
    document.getElementsByClassName('nav_list_footer')[0].className = 'nav_list_footer flex justify-between text-center px-6 border-non';
  }
  getNewsList() {
    this.loading = true
    const params = {
      // any prams
    };
    this.newsService.getNewsList(params).subscribe((res: any) => {
      res.News.forEach((element: any) => {
        element.liked = false
      });
      this.newsList = res.News;
      this.allNewsList = this.newsList;
      this.sortDate()
      this.pagination(this.newsList.length)
    });
    this.loading = false
    this.loadingError = false
  }

  sortDate() {
    // this function is sorting date
    this.newsList.sort(function (a: any, b: any) {
      if (new Date(b.published).valueOf() > new Date(a.published).valueOf()) {
        return -1
      }
      return 0
    });
  }


  changePage(pageNumber: any) {
    this.pageNumber = pageNumber;
    if (pageNumber === 1) {
      this.newsList = this.allNewsList.slice(0, this.pageCount);
    } else {
      this.newsList = this.allNewsList.slice((pageNumber - 1) * this.pageCount, this.pageCount * pageNumber);
    }
  }

  pagination(numberOfItems: any) {
    const numberOfPages = Math.ceil(numberOfItems / this.pageCount);
    this.pages = [];
    for (let index = 0; index < numberOfPages; index++) {
      this.pages.push(index + 1);
    }
    this.newsList = this.allNewsList.slice(0, this.pageCount);
  }

  getCurrentPageItemsForFiltration() {
    if (this.pageNumber === 1) {
      return this.allNewsList.slice(0, this.pageCount);
    } else {
      return this.allNewsList.slice((this.pageNumber - 1) * this.pageCount, this.pageCount * this.pageNumber);
    }
  }

  previousPage() {
    if (this.pageNumber === 1)
      return;
    this.pageNumber--;
    this.changePage(this.pageNumber);
  }

  nextPage() {
    if (this.pageNumber === this.pages.length)
      return;
    this.pageNumber++;
    this.changePage(this.pageNumber);
  }




  onSubmit() {
    let filterData = {
      ...this.filterForm.value
    }
    if (filterData.from != null) {
      let newsFilter = this.newsList.filter((item: any) => new Date(item.published).toDateString() == new Date(filterData.from).toDateString());
      console.log(newsFilter);

      this.newsList = newsFilter;
    }
    if (filterData.to != null) {
      let newsFilter = this.newsList.filter((item: any) => new Date(item.published).toDateString() == new Date(filterData.to).toDateString());
      this.newsList = newsFilter;
    }
    if (filterData.searchInput != null) {
      let newsFilter = this.newsList.filter((item: any) => item.title.toLowerCase().includes(filterData.searchInput.toLowerCase()));
      this.newsList = newsFilter;
    }
  }

  resetFilter() {
    Object.keys(this.filterForm.controls).forEach(key => {
      this.filterForm.controls[key].setValue(null);
    });
    this.getNewsList();
  }

}
