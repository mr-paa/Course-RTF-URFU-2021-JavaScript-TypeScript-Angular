import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title: string = 'wiki';
  searchTerm: string ='';
  historySearch:string[]=[];
  results: any[] = [];
  dat: object[]=[];
  totalResults: any;
  page: number = 1;
  on: boolean = false;

  constructor(public wiki: WikipediaService) {}

  ngOnInit(): void {    
    
  }
  
  onSubmit(sort: string) {
    if (sort === 'relev' ) {
      this.wiki.searchRelev(this.searchTerm).subscribe((res:any) => {
        this.results = res.query.search;
        console.log(this.results)
        this.dat = res.query.search.timestamp;
        this.totalResults = res.query.search.length;
      })
      this.on= true;
    }


    if ( sort === 'editdDataDown' ) {
      this.wiki.searchDateDesc(this.searchTerm).subscribe((res:any) => {
        this.results = res.query.search;
        this.dat = res.query.search.timestamp;
        this.totalResults = res.query.search.length;
      })
      this.on= false;
    }

    if ( sort === 'editdDataUp' ) {
      this.wiki.searchDateAsc(this.searchTerm).subscribe((res:any) => {
        this.results = res.query.search;
        this.dat = res.query.search.timestamp;
        this.totalResults = res.query.search.length;
      })
      this.on= false;
    }
     
    if (this.searchTerm !== '') {
      this.historySearch = JSON.parse(localStorage.getItem('history') || '[]')
      if (this.historySearch[this.historySearch.length-1] !== this.searchTerm) {
        this.historySearch.push(this.searchTerm);
        localStorage.setItem('history', JSON.stringify(this.historySearch)); 
      } 
    }
  }
}