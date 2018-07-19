import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  fieldValue = 'test';
  isDescription = false;
  servers = [
    'First',
    'Second',
    'Third'
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isDescription = true;
    this.servers.push(this.fieldValue);
    this.serverCreationStatus = 'Server was created! Name is ' + this.fieldValue;
  }

  onFieldChange(event: Event) {
    this.fieldValue = (<HTMLInputElement>event.target).value;
  }

}
