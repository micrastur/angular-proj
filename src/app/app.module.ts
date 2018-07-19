import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/servere.component';
import { ServersComponent } from './servers/servers.component';
import { AlertWarning } from './alertWarning/alertWarning.component';
import { AlertSuccess } from './alertSuccess/alertSuccess.component';
import { Username } from './username/username.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AlertWarning,
    AlertSuccess,
    Username
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
