import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public lists:Array<any> = [
  			{link:'/feedback',icon:'',name:'Feedback List'},
  			{link:'/feedback-add',icon:'',name:'Feedback Add'},
  			{link:'/reviews',icon:'',name:'Review List'},
		  ]

}


