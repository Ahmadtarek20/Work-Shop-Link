import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/Models/news';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = `c138bb84dc0b94ec5a18`;
  constructor(
    private http: HttpClient
  ) {
  }

  getSourceCategory(): Observable<News> {
    return this.http.get(baseUrl + this.apiUrl);
  }
}
