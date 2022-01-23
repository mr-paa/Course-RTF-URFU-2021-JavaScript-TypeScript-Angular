import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';


const appRoutes: Routes = [
 
  {path: 'search', component: SearchComponent},
  {path: 'history', component: HistoryComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
