import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FeedbackApi } from '../sdk/services';


@Component({
  selector: 'app-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent implements OnInit {
	public postData: any = {
          Name: '',
          Email: '',
          Age:'',
          Gender:'',
          Country:'',
          Experience:'',
          Suggestions:''
        };
    public isSubmitted:boolean = false;
    public showThankyou:boolean = false;
  constructor(private feedbackapi:FeedbackApi) { }

  ngOnInit() {
  		this.showThankyou = false;
  }

  onSubmit(myForm) {
  	this.isSubmitted = true;
  	if (!myForm.valid) {return}
  		this.feedbackapi.create(this.postData)
  		.distinctUntilChanged()
  		.subscribe((res: Response)=>{
  			console.log(res)
  			this.postData = {};
  			this.isSubmitted = false;
  			this.showThankyou = true;

  			})
  }

  hideThankyou(){
  		this.showThankyou = false;
  }

}
