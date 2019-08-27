import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from  '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { DashbordService} from './services/dashbord.service';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DashbordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
