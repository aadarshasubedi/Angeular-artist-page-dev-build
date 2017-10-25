
// Import the needed dependencys
import { Component, OnInit, Input, Output } from '@angular/core';
import * as jQuery from 'jquery';
import { HttpModule, JsonpModule } from '@angular/http';
import {Http} from "@angular/http";
import {Headers} from '@angular/http';
import { Injectable, EventEmitter} from '@angular/core';
import 'rxjs';




import * as clubIDG from '../club-chooser/club-chooser.component';



// General API data
var URL:String = "https://services-test.wr1.com/webapi/clubs";
// Implement headers for the api aws to get data with this secret key
var headers = new Headers();
headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');



/* json for wall */

/*
{"type":"clubWallResponse","status":{"errorCode":200,"serverTimestamp":1498492968180},"club":{"adminUserIds":[5],"artistId":5,"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","banner":"FIRST LOOK AT MY NEW MUSIC VIDEO","description":"Beyonce","fanFeedLabel":"Fan Feed","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","owner":{"avatarUrl":"https://wr1test.imgix.net/5/02DBA0F0-A065-4C7E-AF9C-6CE3626ACBA4.JPG","backgroundUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","id":5,"location":{"area":"Karnataka","country":"India","latitude":12.983969157041,"locality":"Bengaluru","longitude":77.623464861875,"subArea":"Bengaluru Urban"},"name":"Beyonce","notificationSetting":{"artistPost":true,"clubs":[],"fanPost":true,"postCommented":true,"postLiked":true,"streamPost":true},"quickBloxId":3228529,"subscriptionExpiration":0,"totalCoins":0},"splashUrl":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG","stats":{"activities":134,"followers":1,"payingSubscribers":0,"subscribers":0},"streaming":false,"subscriptionProductIds":["com.wr1.ios.auto.1month","com.wr1.ios.auto.monthly"],"uploading":false,"url":"https://wr1test.imgix.net/5/FC1B61B5-936F-48A7-A734-F44E73EA13C3.JPG"}} 
*/


// Add the injectable
@Injectable()


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
@Input() clubID: string;
artistAvatar

// add some animations

openBubbleUI() {

   var x = document.getElementById('BubbleMenueIDForToggle');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}



  constructor(private http: Http) { 

  }

  // get he artist Bakgroundrequest
getArtistWall(clubID){
  
  
var headers = new Headers();
  headers.append('Application-Key', '6CAEA9D43AC5DF96CEF21C78A73A3');
  headers.append('dataType', 'json');
// wall url is over here


     var clubWallArtistAvaatr = this.http.get('https://services-test.wr1.com/webapi/clubs/' + clubID + '/wall', {headers:headers}).map(
    res => res.json()).subscribe(
      data => this.artistAvatar = JSON.stringify(data.club.avatarUrl), 

  err => this.logError(err),
  () => console.log('Arist backgrouns Image Loaded')
  ); 
  
  {
    
  }

 
}
// Error handling

logError(err) {
  
  console.error('There was an error: ' + err);
}

  ngOnInit() {

    this.artistAvatar = this.getArtistWall(clubIDG.clubIDGt);
  }

}
