import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit {
  @ViewChild('serverContentInput') serverContent;
  newServerContent:string;
  @Output() serverCreated = new EventEmitter<{name:string,content:string,type:string}>();
  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({
      name : serverNameInput.value,
      content : this.serverContent.nativeElement.value,
      type:"server"
    });
  }

  onAddBlueprint(serverNameInput) {
    this.serverCreated.emit({
      name : serverNameInput.value,
      content : this.serverContent.nativeElement.value,
      type:"blueprint"
    });
  }
}
