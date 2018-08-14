import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReceipeModel } from '../../receipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
  @Input('receipeItem') receipe:ReceipeModel;
  @Output('receipeSelected') receipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onReceipeSelected(){
    this.receipeSelected.emit();
  }
}
