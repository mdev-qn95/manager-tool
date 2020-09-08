import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {

  constructor() { }

  serverId: number = 10;
  serverStatus: string = 'Offline';

  getServerStatus() {
    return this.serverStatus
  }

  ngOnInit(): void {
  }

}