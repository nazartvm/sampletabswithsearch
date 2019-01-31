import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import {MessageserviceService} from '../services/messageservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  messageList:any=[];
  customerMessage:any[];
  agentMessage:any[];
  currentTab:string="Customer Message";
  constructor(private messageService:MessageserviceService){
   this.getMessage();
  }
  addShow(){
    this.messageList.map((item)=>{
      item.show=true;
    })
  }
  getMessage(){
    this.messageService.GetMessageData(0).subscribe(
      (response: Response) => {
        this.messageList = response;
        this.addShow();
      },
      (error) => {
        console.log(error)
      }
    )
  }
  getcustomerdata(){
    this.messageList=[];
    this.messageService.GetMessageData(0).subscribe(
      (response: Response) => {
        this.messageList = response;
        this.addShow();
      },
      (error) => {
        console.log(error)
      }
    )
    this.currentTab="Customer Message";
  }
  getagentdata(){
    this.messageList=[];
    this.messageService.GetMessageData(1).subscribe(
      (response: Response) => {
        this.messageList = response;
        this.addShow();
      },
      (error) => {
        console.log(error)
      }
    )
    this.currentTab="Agent Message";
  }
  getcanneddata(){
    this.messageList=[];
    this.messageService.GetMessageData(2).subscribe(
      (response: Response) => {
        this.messageList = response;
        this.addShow();
      },
      (error) => {
        console.log(error)
      }
    )
    this.currentTab="Canned Message";
  }
  import(){
    alert("import");
  }
  //export click
  export(){
    alert("export");
  }
  //end of the click
  //search function
  search(event: any) { // without type info
    let searchKey=event.target.value;
    this.messageList.map((item)=>{
     if(item.title.indexOf(searchKey)==-1 && item.message.indexOf(searchKey)==-1){
       item.show=false;
     }
     else{
      item.show=true;
     }
    })
    //console.log(event.target.value );
  }
  //end of the function
}
