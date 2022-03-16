import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { News } from './../../Models/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  apiUrl = `96363b7b60639fdd6e7d`;
  constructor(
    private http: HttpClient
  ) {
  }

  getNewsList(params: {} = {}): Observable<any[]> {
    return this.http.get<any[]>(baseUrl + this.apiUrl, { params: { ...params } });
  }

  getNewsItem(id: any): Observable<any> {
    return this.http.get<any>(baseUrl + `${this.apiUrl}/News/${id}`);
  }


}
