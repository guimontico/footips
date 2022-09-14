import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  @Output() selectedEvent:EventEmitter<string> = new EventEmitter();

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#leagues')
                                  .addEventListener('blur', this.onClick.bind(this));
  }

  onClick(event: any) {
    this.selectedEvent.emit(event.target.value)
  }

}
