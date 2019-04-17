import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { EstablishmentInscriptionComponent }
  from './establishment-inscription/establishment-inscription.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfilemessageComponent } from './profilemessage/profilemessage.component';

const routes: Routes = [
  { path: 'establishments/:id', component: EstablishmentInscriptionComponent },
  { path: '', component: CategorieComponent },
  { path: 'profiles', component: ProfileComponent },
  { path:'bookings/create', component: BookingFormsComponent },
  { path: 'bookings/:id', component: BookingFormsComponent },
  { path:'bookings/:id/update', component: BookingFormsComponent },
  { path:'messages/:id', component:ProfilemessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
