import { AfterViewInit, Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, AfterViewInit {

  constructor(private elementRef:ElementRef) { }

  @Output() datepickedEvent:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#datepicker')
                                  .addEventListener('blur', this.onClick.bind(this));
  }

  onClick(event: any) {
    this.datepickedEvent.emit(event.target.value)
  }

}
