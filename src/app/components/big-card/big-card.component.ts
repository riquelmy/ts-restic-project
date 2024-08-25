import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  bigphotoCover:string = "";
  @Input()
  bigcardTitle: string = "";
  @Input()
  bigcardDescription: string = "";
  @Input()
  Id: string = "0";

  constructor() { }

  ngOnInit(): void {
  }

}
