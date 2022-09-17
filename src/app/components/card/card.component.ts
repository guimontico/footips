import { ReplacePipe } from '../../pipes/replace/replace.pipe';
import { Split } from '../../pipes/split/split.pipe'
import { Fixtures } from './../../models/fixtures';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule ,Split, ReplacePipe],
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
