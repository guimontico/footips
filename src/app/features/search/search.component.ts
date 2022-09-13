import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Store } from '@ngrx/store';
import { selectAllFixtures } from 'src/app/state/fixtures/fixture.selectors';
import { Fixtures } from 'src/app/models/fixtures';
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

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    // this.store.dispatch(loadFixtures({ date: this.date }));
  }

}
