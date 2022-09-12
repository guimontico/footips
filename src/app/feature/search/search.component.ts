import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputSearch: string = "Buscar"
  inputPlaceholder: string = "Digite o nome do time"

  constructor() { }

  ngOnInit(): void {

  }

}
