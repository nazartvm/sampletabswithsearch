import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageserviceService {

  constructor(private http: HttpClient) { 
    
  }
  GetMessageData(enumdata) {
    return this.http.get('http://localhost:57064/api/message/getmessage?messagedUser='+enumdata);
  }
}
