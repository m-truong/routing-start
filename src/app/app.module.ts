import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule } from '@angular/router';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children: [
      // Note: this is now a dynamic path that takes a 'url' 'parameter'
      { path: ':arbVarURLparameter/:name', component: UserComponent },
    ]
  },
  { path: 'servers', component: ServersComponent,
    // note: this nested children[] array of routes always gets pre-pended to the parent route - 'servers'  
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent } 
    ] 
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
