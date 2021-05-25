import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-amit-gupta',
  templateUrl: './amit-gupta.component.html',
  styleUrls: ['./amit-gupta.component.css']
})
export class AmitGuptaComponent implements OnInit {
   videoId : any ;
   liveFlag: boolean = false;
   stuName: any;
   flag: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.videoId = this.route.snapshot.paramMap.get('videoId');
    this.stuName = this.route.snapshot.paramMap.get('userName');
    this.flag = this.route.snapshot.paramMap.get('flag');
    this.liveFlag = this.flag == "t" ? true : false;
    console.log("the name is ", this.videoId);
  }

}
