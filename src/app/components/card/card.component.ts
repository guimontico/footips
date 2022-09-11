import { loadFixtures } from './../../state/fixtures/fixture.actions';
import { Fixtures, FixtureResponse } from './../../models/fixtures';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectAllFixtures } from 'src/app/state/fixtures/fixture.selectors';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  API = environment.footballApi
  public allFixtures$ = this.store.select(selectAllFixtures);
  public fixtures: Fixtures[] = []

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(loadFixtures());
    this.allFixtures$.subscribe((data) => {
      this.fixtures = data!.response
    })
  }

  showFixtureDetails(fixture: Fixtures) {
    console.log(fixture)
  }

}
