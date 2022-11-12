import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  queryname='';
  querytag='';
  querytrending='';

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(data=>{
      this.queryname=data['country'];
      this.querytag=data['tag'];
      this.querytrending=data['trending'];
      console.log(this.queryname)
    })
  }

  ngOnInit(): void {
  }

}
