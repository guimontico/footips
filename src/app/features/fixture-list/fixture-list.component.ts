import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Fixtures } from 'src/app/models/fixtures';
import { selectAllFixtures } from 'src/app/state/fixtures/fixture.selectors';

@Component({
  selector: 'app-fixture-list',
  templateUrl: './fixture-list.component.html',
  styleUrls: ['./fixture-list.component.css']
})
export class FixtureListComponent implements OnInit {

  public allFixtures$ = this.store.select(selectAllFixtures);
  public fixtures: Fixtures[] = []

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    // fetch('http://localhost:3000/response')
    //   .then(response => response.json())
    //   .then(fixtures => { this.fixtures = fixtures })
    this.allFixtures$.subscribe((data) => {
      if (data) {
        this.fixtures = data!.response
      }
    })
  }

}
