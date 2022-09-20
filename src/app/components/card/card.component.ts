import { ReplacePipe } from '../../pipes/replace/replace.pipe';
import { Split } from '../../pipes/split/split.pipe'
import { Fixtures } from './../../models/fixtures';
import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
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

  getStatusBadge(status: string): string {
    let badgeStyle = "";

    if (status) {
      switch (status) {
        case "TBD":
        case "NS":
        case "PST":
        case "SUSP":
          badgeStyle = "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800";
          break;
        case "LIVE":
        case "P":
        case "ET":
          badgeStyle = "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900";
          break;
        case "HT":
        case "FT":
        case "BT":
          badgeStyle = "bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900";
          break;
        default:
          badgeStyle = "bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800";
          break;
      }
    }
    return badgeStyle;
  }

  getTimeElapsed(elapsedTime: number | undefined) {
    let elapsedTimePercent = '0'
    if (elapsedTime) {
      elapsedTimePercent = ((elapsedTime / 90) * 100).toFixed(2) ;
    }
    return elapsedTimePercent + '%'
  }

}
