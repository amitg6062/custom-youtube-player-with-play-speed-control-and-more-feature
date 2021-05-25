import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  id: any;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("the name is ", this.id);
  }

}
