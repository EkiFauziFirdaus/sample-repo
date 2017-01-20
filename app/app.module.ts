import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule } from '@angular/router';

import { fakeBackendProvider } from './services/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

//ng2-bootstrap
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';

//services
import { ProdukService } from './services/produk.service';

//components
import { DashboardComponent } from './components/dashboard.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'dashboard', component : DashboardComponent
      },
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      }
    ]),

    //ng2-bootstrap
    CarouselModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  providers:
  [
    ProdukService,

    //fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
