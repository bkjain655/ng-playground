import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReceipeModel } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  receipes:ReceipeModel[] = [new ReceipeModel('Test Receipe','Tese receipe description of how to doing it','https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d'),
  new ReceipeModel('Test Receipe 2','These receipe 2 description of how to doing it','https://c.pxhere.com/photos/08/fc/food_dish_rice_thailand_food_thailand_shrimp_fast_food_the_pork_fried_rice_made-1377212.jpg!d')];

  @Output('selectedReceipe') selectedReceipe = new EventEmitter<ReceipeModel>();
  constructor() { }

  ngOnInit() {
  }

  onSelectedReceipe(receipe:ReceipeModel){
    this.selectedReceipe.emit(receipe);
  }

}
