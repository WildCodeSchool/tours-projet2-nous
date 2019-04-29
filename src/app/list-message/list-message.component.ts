import { Component, OnInit } from '@angular/core';
import { MessageService } from '../common/services/message.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css'],
})
export class ListMessageComponent implements OnInit {

  public listMessage;
  public tableLists = [];
  message = this.tableLists[0];

  constructor(public service: MessageService) { }

  ngOnInit() {
    this.service.getListMessage().subscribe(
      (message) => {
        this.listMessage = message;
        this.tableLists = this.listMessage;
      });

  }
  delMessage(id, i) {
    this.service.delMessage(id, i).subscribe(
      (val) => {
        console.log('DELETE call successful value returned in body',
                    val);
        this.listMessage.splice(i, 1);
      },
      (response) => {
        console.log('DELETE call in error', response);
      },
      () => {
        console.log('The DELETE observable is now completed.');
      });

  }
}
