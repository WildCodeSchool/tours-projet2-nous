import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilemessageComponent } from './profilemessage/profilemessage.component';

const routes: Routes = [{ path:'messages/:id', component:ProfilemessageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
