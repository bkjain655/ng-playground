import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServer:boolean = false;
  serverCreatedStatus:string = "No Server Created";
  serverCreated:boolean = false;
  serverName:string = "Test Server";
  servers:string[] = ["Test Server 1","Test Server 2"];
  constructor() { 
    setTimeout(() => {
      this.allowServer = true;
    }, 3000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedStatus = "Server created succesfully! " + this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
