import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private currRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.currRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(1);
    this.currRoute.params
    .subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(params['id'])
      }
    )
  }

}
