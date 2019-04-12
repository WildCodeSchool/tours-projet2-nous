import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';

const routes: Routes = [{ path: 'bookings/:id', component: BookingFormsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
