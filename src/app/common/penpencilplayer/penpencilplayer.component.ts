import { Component, Input, OnInit } from '@angular/core';
import { PenpencilplayerService } from './penpencilplayer.service';


@Component({
  selector: 'app-penpencilplayer',
  templateUrl: './penpencilplayer.component.html',
  styleUrls: ['./penpencilplayer.component.css']
})
export class PenpencilplayerComponent implements OnInit {

  @Input() videoId: string = '';
  @Input() liveFlag: boolean = false;
  @Input() userName: string = '9810980641';

  id: any;
  playerConfig: any;
  player: any;
  sourceYoutube: any;
  constructor(
    private ppp: PenpencilplayerService
  ) { }

  ngOnInit() {
    this.callPlayer();
  }

  callPlayer() {
    this.playerConfig = {
      poster: 'https://i.ytimg.com/an_webp/tCLHqgLr4oY/mqdefault_6s.webp?du=3000&sqp=CPzR_oQG&rs=AOn4CLBaTHsbeDwC8OfDSGfaPMa3RQ-Rkg',
      liveui: this.liveFlag,
      sources: [{
        src: 'https://www.youtube.com/embed/' + this.videoId,
        type: 'video/youtube', // video/mp4 (for mp4) ||application/x-mpegURL (for hls) || video/youtube (for youtube)
      }
      ],
      autoplay: true,
      startTime: 0,
      fullScreenEnabled: false,
      fluid: 'responsive', // fluid || fill || responsive
      seekButtons: true, // Add plugin first
      seekSeconds: 10, // Add plugin first
      defaultQuality: 'auto', // Auto|'240'|'360'...
      // encryptionUri: 'http://localhost:8000/v1/videos/get-hls-key?videoId=videoId', // For Secured HLS only
      // headers: [
      //   {
      //     authorization: 'Bearer 14fe4f2003f7633b6366a660fb30200f5f95218ef52272b50644fa023ce245ea'
      //   }
      // ], // For Secured HLS only
      watermark: { // Add plugin first
        text: this.userName,
        // link: 'amitLink',
        // imageUrl: 'https://kelvin.ac.in/public_assets/images/logo.png'
      }
    };
  }

  play(data: any) {
    console.log('Playing', data);
  }


  pause(data: any) {
    console.log('Pause', data);
  }

  ended(data: any) {
    console.log('Ended', data);
  }

  fullScreen(data: any) {
    console.log('fullScreen', data);
  }

  initializePlayer(dataa: any) {
    console.log('intiliase data', dataa);
    this.player = dataa;
  }




}
