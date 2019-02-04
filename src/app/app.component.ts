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
  //this function add additional properties to my list for the search purpose
  addShow(){
    this.messageList.map((item)=>{
      item.show=true;
    })
  }
  //end of the function
  //function to get the message
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
  //end of the function
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
  //export click
  export(){
    alert("export");
  }
  //end of the click
  //search function
  search(event: any) { // without type info
    let searchKey=event.target.value.toLowerCase();//this add now
    this.messageList.map((item)=>{
      //here also lowercase added now
     if(item.title.toLowerCase().indexOf(searchKey)==-1){
       item.show=false;
     }
     else{
      item.show=true;
     }
    })
    //console.log(event.target.value );
  }
  //end of the function
filetrigger(){
  document.getElementById('fileid').click();  
}
}
