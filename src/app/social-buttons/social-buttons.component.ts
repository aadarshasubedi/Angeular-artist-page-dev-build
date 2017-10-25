import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-buttons',
  templateUrl: './social-buttons.component.html',
  styleUrls: ['./social-buttons.component.css']
})

export class SocialButtonsComponent implements OnInit {
socialButtons;
  constructor() { }

  ngOnInit() {

          this.socialButtons = [

    {
        FAiconClass: 'fa fa-spotify',
        socialType: 'spotify',
        socialURL: 'https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V',
        ariahidden: 'true',
          iconText: 'follow',
        artistName: 'Ed Sheeran'
      },
        {
        FAiconClass: 'fa fa-twitter',
        socialType: 'twitter',
        socialURL: 'https://twitter.com/edsheeran',
        ariahidden: 'true',
        iconText: '',
        artistName: 'Ed Sheeran'
      }, 
             {
        FAiconClass: 'fa fa-facebook',
        socialType: 'facebook',
        socialURL: 'https://www.facebook.com/EdSheeranMusic/',
        ariahidden: 'true',
          iconText: '',
        artistName: 'Ed Sheeran'
      },      {
        FAiconClass: 'fa fa-youtube-square',
        socialType: 'youtube',
        socialURL: 'https://www.youtube.com/user/EdSheeran',
        ariahidden: 'true',
          iconText: '',
        artistName: 'Ed Sheeran'
      },
          {
        FAiconClass: 'fa fa-instagram',
        socialType: 'instagram',
        socialURL: 'https://www.instagram.com/edsheeran/',
        ariahidden: 'true',
          iconText: '',
        artistName: 'Ed Sheeran'
      }
    ];
  }

}
