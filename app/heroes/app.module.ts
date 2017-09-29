import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RouterModule, UrlHandlingStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { AppRoutingModule } from './app-routing.module';

class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  //shouldProcessUrl(url) { return url.toString().startsWith("/settings"); }
  private static readonly ngPaths = [
    '/dashboard',
    '/detail/',
    '/heroes'
  ];
  shouldProcessUrl(url) {
    var shouldProcess = Ng1Ng2UrlHandlingStrategy.ngPaths.findIndex(x => url.toString().includes(x)) >= 0;
    console.log(`Should process ${url.toString()} - ${shouldProcess}`);
    return shouldProcess;
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService,
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }
  ngDoBootstrap() {
    //this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
  }
}