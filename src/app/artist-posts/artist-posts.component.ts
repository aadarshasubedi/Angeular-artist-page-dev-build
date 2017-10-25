import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-posts',
  templateUrl: './artist-posts.component.html',
  styleUrls: ['./artist-posts.component.css']
})
export class ArtistPostsComponent implements OnInit {

  artist_posts;
  constructor() { }

  ngOnInit() {
    this.artist_posts = [
      {
        text: 'Rihana just posted something'
      },
      {
        text: 'Justing beiber just posed something.'
      },
      {
        text: 'Testing'
      }
];
  }

}

