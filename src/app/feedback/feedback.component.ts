import { Component, OnInit } from '@angular/core';
import { FeedbackApi } from '../sdk/services';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
		records:Array<any> = [];

  constructor(private feedbackapi:FeedbackApi) { }

  ngOnInit() {
  		this.getData();
  }

  getData(){
      this.feedbackapi.find().subscribe(
      (data) => {
        this.records = data;
        
      });
  }
  deleteRow(id,index){
  	console.log("rid = "+id)
  	if(confirm("Are you sure, you want to delete?")){
  			this.feedbackapi.deleteById(id)
		  	.subscribe((data) => {
		        console.log(data)
		        this.getData();
		      })
  	}
  	

  }

}
