// Note: Best practice is to add all Angular routes to it's very own routing module file

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      // Note: this is now a dynamic path that takes a 'url' 'parameter'
      { path: ':arbVarURLparameter/:name', component: UserComponent, resolve: {server: ServerResolver} },
    ]
  },
  // Now 'servers' is only activated/accessible if the login method is invoked
  { path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent,
    // note: this nested children[] array of routes always gets pre-pended to the parent route - 'servers'  
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] 
  },
  // {
  //   path: 'not-found', component: PageNotFoundComponent
  // },
  {
    path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!*' }
  },
  // {
  //   path: 'something', redirectTo: '/not-found'
  // },
  // Note: This is a catch-all 'Angular wildcard' route that will redirect all unsupported URL's to the 'not-found' URL string.
  // Note: This always has to be the very last route to catch all the unknown routes; else wise placing it before all the routes above will redirect automatically.
  { path: '**', redirectTo: '/not-found'}
];

/**
 * Note: Angular route guards allow developers to run pre-code before a route gets mounted a time defined by the developer. 
 */

@NgModule({
  imports:[
    // Informs webserver to use the hashRouting in case of 404 errors
    // RouterModule.forRoot(appRoutes, { useHash: true } )
    RouterModule.forRoot(appRoutes)
  ],
  // Note: This NgModule must also be exported 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
  
}