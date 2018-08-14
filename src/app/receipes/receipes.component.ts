import { Component, OnInit } from '@angular/core';
import { ReceipeModel } from './receipe.model';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css']
})
export class ReceipesComponent implements OnInit {
  receipeSelected:ReceipeModel;
  constructor() { }

  ngOnInit() {
  }
  onReceipeSelected(receipe:ReceipeModel){
    this.receipeSelected = receipe;
  }
  receipeIsNotNull(){
    return typeof this.receipeSelected != 'undefined';
  }

}
