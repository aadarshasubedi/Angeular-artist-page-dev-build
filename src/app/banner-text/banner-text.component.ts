import { Component, OnInit } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'app-banner-text',
  templateUrl: './banner-text.component.html',
  styleUrls: ['./banner-text.component.css']
})
export class BannerTextComponent implements OnInit {
  messages;
  text;
  constructor() { }

  ngOnInit() {


 
  }

addMessage(){
  console.log(this.text);
  this.messages.push({
    text: this.text
  });
}


UpdateMessage(messageText){


}
  DeleteMessage(messageText){
    for(var i = 0; i < this.messages.length; i++){
      if(this.messages[i].text == messageText){
        this.messages.splice(i, 1);
      }
    }
  }

}
