import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkClicked:string = "receipes";
  serverElements = [{
    type: 'blueprint',
    name:"test server",
    content: "test server content"
  }];


  onServerCreated(serverData) {
    this.serverElements.push({
      type: serverData.type,
      name: serverData.name,
      content: serverData.content
    });
  }

  onLinkClicked(data){
    this.linkClicked = data;
  }
}
