import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, OnDestroy {
  server: {id?: number, name?: string, status?: string};
  serverName = '';
  serverStatus = '';
  queryParamsSubscription: any;
  fragmentSubscription: any;
  allowEdit = false
  changeSaved = false;

  constructor(private serversService: ServersService,
    private currRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log('logging', this.currRoute.snapshot.queryParams);
    console.log('logging', this.currRoute.snapshot.fragment);
    this.queryParamsSubscription = this.currRoute.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
    });
    this.fragmentSubscription = this.currRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved = true;
    this.router.navigate(['../'], { relativeTo: this.currRoute });
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.fragmentSubscription.unsubscribe();
  }

}
