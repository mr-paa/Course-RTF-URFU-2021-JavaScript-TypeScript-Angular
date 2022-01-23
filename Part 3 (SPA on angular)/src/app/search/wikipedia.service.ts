import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  private baseUrl ='https://ru.wikipedia.org/w/api.php';
  constructor(private http: HttpClient) { }

  searchRelev(data: string) {
    return this.http.get(this.baseUrl, {
      params: {
        action: "query",
        list: "search",
        srsearch: data,
        format: "json", 
        origin: '*',
        srlimit: 50,
        srsort: 'relevance'
      }
    })
  }
  
  searchDateDesc(data: any) {
    return this.http.get(this.baseUrl, {
      params: {
        action: "query",
        list: "search",
        srsearch: data,
        format: "json", 
        origin: '*',
        srlimit: 50,
        srsort: 'last_edit_desc'
      }
    })
  }

  searchDateAsc(data: any) {
    return this.http.get(this.baseUrl, {
      params: {
        action: "query",
        list: "search",
        srsearch: data,
        format: "json", 
        origin: '*',
        srlimit: 50,
        srsort: 'last_edit_asc'
      }
    })
  }

}
