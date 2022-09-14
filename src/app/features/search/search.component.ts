import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadFixtures } from 'src/app/state/fixtures/fixture.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  inputSearch: string = "Buscar"
  inputPlaceholder: string = "Time"
  date: string = '2022-09-06'
  league: string = '2';

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    let date = new Date();
    this.date = date.toISOString().split('T')[0]
    // this.loadFixturesFromStore();
  }

  loadFixturesFromStore(){
    this.store.dispatch(loadFixtures({ date: this.date, league: this.league }));
  }

  searchEvent(e: any): void {
    this.loadFixturesFromStore();
  }

  inputedEvent(e: any): void {
    this.loadFixturesFromStore();
  }

  selectedEvent(league: string): void {
    this.league = league
    this.loadFixturesFromStore();
  }

  datepickedEvent(date: string): void {
    this.date = (date) ? this.formatDate(date) : ''
    console.log(this.date)
  }

  formatDate (str: string) {
    let darr = str.split("/");
    var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
    return dobj.toISOString().split('T')[0];
  }

}
