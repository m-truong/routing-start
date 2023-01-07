import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private currentRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    // Note: assigning this.user to a 'fresh' object instance with the route's parameters
    this.user = {
      id: this.currentRoute.snapshot.params['arbVarURLparameter'],
      name: this.currentRoute.snapshot.params['name'],
    };
    // Note: This is an ES6 'Promise' based logic; this executes and tacks on an event-Listener and fires the subscribe method only when the params 'Observable' gets updated`
    // Note: This is best-practice!
    this.paramsSubscription = this.currentRoute.params.subscribe(
      (updatedRouteParams: Params) => {
        this.user.id = updatedRouteParams['arbVarURLparameter'];
        this.user.name = updatedRouteParams['name'];
      }
    );
    console.log('logging the paramsSubscription', this.paramsSubscription);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
