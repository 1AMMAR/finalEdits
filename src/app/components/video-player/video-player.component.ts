import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {
  url: string;
  videoTitle: string;
  constructor(readonly route:Router) {
    this.url = "";
    this.videoTitle= "video title";
  }
}
