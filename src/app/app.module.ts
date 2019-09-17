import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MarkerListComponent } from './components/marker-list/marker-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InitComponent,
    NotfoundComponent,
    MarkerListComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBY0AkwubTN68IOH-fxLEaAnf-QmjYeBlM'
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
