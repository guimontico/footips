import { Fixtures } from './../../models/fixtures';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() fixture!: Fixtures

  constructor() { }

  ngOnInit(): void {  }

  showFixtureDetails(fixture: Fixtures) {
    console.log(fixture)
  }

}
