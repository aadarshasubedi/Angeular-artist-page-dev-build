import { Component, OnInit, Injectable, } from '@angular/core';
import {Http, HttpModule} from '@angular/http';
import 'rxjs';

@Injectable()
@Component({
  selector: 'app-social-content',
  templateUrl: './social-content.component.html',
  styleUrls: ['./social-content.component.css']
})
export class SocialContentComponent implements OnInit {
socialcontentsFF;
socialcontentsSF;
  constructor(private http: Http) { }

  ngOnInit() {

          this.socialcontentsFF = [

    
        {
        bgcolor: '#F0F0F0',
        text: 'Season 4 in game of thrones, going strong. Loving @emiliaclarke and Peter Dinkle.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '5 days ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
      
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "8", favorites: "49" }

      }, 
            {
         bgcolor: '#F7F7F7',
        text: 'I really do.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
      
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "12", favorites: "45" }

      }, 
             {
           bgcolor: '#F7F7F7',
        text: "Can't put it into words how much I love you guys.",
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
      
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "15", favorites: "46" }

      }, 
              {
           bgcolor: '#FFFFFF',
        text: "Can't wait to create more music.",
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
      
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "10", favorites: "39" }

      }
         
        
    ];

    this.socialcontentsSF =[
    {
        bgcolor: '#F0F0F0',
        text: 'Got a session tonight. Im excited as fuck.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
    
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "9", favorites: "40" }

      }, 
     {
          bgcolor: '#FFFFFF',
        text: 'I choose to be happy!!!.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
     
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "16", favorites: "45" }

      }, 
        {
        bgcolor: '#F7F7F7',
        text: 'Everyone has their bumps on the road.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '23 hours ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
       
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "13", favorites: "42" }

      }, 
     {
           bgcolor: '#F7F7F7',
        text: 'Feels good to be back.',
        posterHashTag: '@BenjaminLasnier',
        posterName: 'Benjamin Lasnier',
        postedFrom: 'twitter',
        whenWasPosted: '1 day ago',
        socialURL: 'https://twitter.com/BenjaminLasnier/',
      
        tweet: {  url:'https://twitter.com/BenjaminLasnier/status/880847871272251392', retweets: "11", favorites: "41" }

      }, 
      
    ];
 


}
  }


