import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PenpencilplayerService } from './penpencilplayer.service';


@Component({
  selector: 'app-penpencilplayer',
  templateUrl: './penpencilplayer.component.html',
  styleUrls: ['./penpencilplayer.component.css']
})
export class PenpencilplayerComponent implements OnInit {
  id: any;
  playerConfig: any;
  player: any;
  sourceMp4 = [{
    src: 'https://devnuevo.com/media/video/demo_360.mp4',
    type: 'video/mp4', // video/mp4 (for mp4) ||application/x-mpegURL (for hls) || video/youtube (for youtube)
    label: '360'
  },
  {
    src: 'https://devnuevo.com/media/video/demo_720.mp4',
    type: 'video/mp4',
    label: '720'
  },
  {
    src: 'https://devnuevo.com/media/video/demo_720.mp4',
    type: 'video/mp4',
    label: '240'
  },
  {
    src: 'https://devnuevo.com/media/video/demo_720.mp4',
    type: 'video/mp4',
    label: '1220'
  },
  ];

  sourceYoutube: any = 'aFfCXyZTBDc';
  constructor(
    private route: ActivatedRoute,
    private ppp : PenpencilplayerService
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.name = params['name'];
    // });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("the name is ", this.id);
    this.sourceYoutube = [{
      src: 'https://www.youtube.com/embed/' + this.id,
      type: 'video/youtube', // video/mp4 (for mp4) ||application/x-mpegURL (for hls) || video/youtube (for youtube)
      label: '240'
    },
    {
      src: 'https://www.youtube.com/embed/' + this.id,
      type: 'video/youtube', // video/mp4 (for mp4) ||application/x-mpegURL (for hls) || video/youtube (for youtube)
      label: '360'
    },
    {
      src: 'https://www.youtube.com/embed/' + this.id,
      type: 'video/youtube', // video/mp4 (for mp4) ||application/x-mpegURL (for hls) || video/youtube (for youtube)
      label: '720'
    }

    ];
    this.playerConfig = {
      poster: 'https://i.ytimg.com/an_webp/tCLHqgLr4oY/mqdefault_6s.webp?du=3000&sqp=CPzR_oQG&rs=AOn4CLBaTHsbeDwC8OfDSGfaPMa3RQ-Rkg',
      liveui: false,
      sources: this.sourceYoutube,
      autoplay: true,
      startTime: 0,
      fullScreenEnabled: false,
      fluid: 'responsive', // fluid || fill || responsive
      seekButtons: true, // Add plugin first
      seekSeconds: 2, // Add plugin first
      // menu: ['speed', 'quality'],
      defaultQuality: 'auto', // Auto|'240'|'360'...
      // encryptionUri: 'http://localhost:8000/v1/videos/get-hls-key?videoId=videoId', // For Secured HLS only
      // headers: [
      //   {
      //     authorization: 'Bearer 14fe4f2003f7633b6366a660fb30200f5f95218ef52272b50644fa023ce245ea'
      //   }
      // ], // For Secured HLS only
      watermark: { // Add plugin first
        text: 'amitName',
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

  hexToBase64(str: any) {
    return btoa(String.fromCharCode.apply(null,
      str.replace(/\r|\n/g, '').replace(/([\da-fA-F]{2}) ?/g, '0x$1 ').replace(/ +$/, '').split(' '))
    ).replace(/\+/g, '-').replace(/\//g, '_').replace(/=*$/, '');
  }

  base64ToHex(str: any) {
    str = str.replace(/\-/g, '+').replace(/\_/g, '/');
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, '')), hex = []; i < bin.length; ++i) {
      let tmp = bin.charCodeAt(i).toString(16);
      if (tmp.length === 1) tmp = '0' + tmp;
      hex[hex.length] = tmp;
    }
    return hex.join('');
  }

  base64ToHexOld(str: any) {
    for (var i = 0, bin = atob(str.replace(/[ \r\n]+$/, '')), hex = []; i < bin.length; ++i) {
      let tmp = bin.charCodeAt(i).toString(16);
      if (tmp.length === 1) tmp = '0' + tmp;
      hex[hex.length] = tmp;
    }
    return hex.join('');
  }
  

}
