import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/Models/news';
import { NewsService } from 'src/app/services/api/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsItem!: News;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {

  }
  favoriteIcon(newsItem: any) {
    newsItem.liked = true
  }

}
