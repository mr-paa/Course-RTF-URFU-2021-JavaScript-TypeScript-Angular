import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  mass: string[] | null = []
  constructor() { }

  ngOnInit(): string[]| null | any {
    this.mass = JSON.parse(localStorage.getItem('history') || '[]');
    console.log(this.mass)
  }  
  
  clearHistory(): void {
    this.mass?.splice(0, this.mass.length);
    this.mass?.push('История был очищена')
    localStorage.clear(); 
  }
    
}