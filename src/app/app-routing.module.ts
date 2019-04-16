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
  { path: 'bookings/:id', component: BookingFormsComponent },
  { path:'messages/:id', component:ProfilemessageComponent },
  { path:'establishments/:id/update', component: EstablishmentInscriptionComponent },
  { path:'establishments/create', component: EstablishmentInscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
