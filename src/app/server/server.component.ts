import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles:['.online { color : white; }']
  // styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId:number = 10; 
  serverStatus:string = 'online';
 
  constructor() { 
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
