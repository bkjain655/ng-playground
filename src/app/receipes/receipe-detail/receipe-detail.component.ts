import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  @Input('receipe') receipe;
  constructor() { }

  ngOnInit() {
  }

}
