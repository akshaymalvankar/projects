import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitComponent } from './components/init/init.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MarkerListComponent } from './components/marker-list/marker-list.component';

const routes: Routes = [
  { path: 'init', component: InitComponent },
  { path: 'marker-list', component: MarkerListComponent },
  { path: '', redirectTo: 'init', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
