import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    templateUrl : "./header.component.html",
    selector : "app-header",
    styles : []
})
export class HeaderComponent{
    @Output('linkClicked') link = new EventEmitter<string>(); 
    constructor(){}

    onLinkClick(linkClicked:string){
        this.link.emit(linkClicked);
    }
}