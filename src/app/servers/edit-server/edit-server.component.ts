import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  queryParamsSubscription: any;
  fragmentSubscription: any;

  constructor(private serversService: ServersService, private currRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('logging', this.currRoute.snapshot.queryParams);
    console.log('logging', this.currRoute.snapshot.fragment);
    this.queryParamsSubscription = this.currRoute.queryParams.subscribe();
    this.fragmentSubscription = this.currRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }

}
