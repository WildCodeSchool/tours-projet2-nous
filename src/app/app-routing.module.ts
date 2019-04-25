import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
// tslint:disable-next-line: max-line-length
import { EstablishmentInscriptionComponent } from './establishment-inscription/establishment-inscription.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfilemessageComponent } from './profilemessage/profilemessage.component';
import { ListeBookingComponent } from './liste-booking/liste-booking.component';
import { ListEstablishmentComponent } from './list-establishment/list-establishment.component';
// tslint:disable-next-line: max-line-length
import { DetailListEstablischmentComponent } from './detail-list-establischment/detail-list-establischment.component';
import { ListMessageComponent } from './list-message/list-message.component';
import { DetailsProfileComponent } from './details-profile/details-profile.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards';

const routes: Routes = [
  { path: 'establishments/details/:id', component: DetailListEstablischmentComponent },
  { path: 'bookings/:establishment', component: BookingFormsComponent },
  { path: 'establishments/create', component: EstablishmentInscriptionComponent },
  { path: 'profiles/establishments', component: ListEstablishmentComponent },
  { path: 'establishments/:id', component: EstablishmentInscriptionComponent },
  { path: '', component: CategorieComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'bookings/list', component: ListeBookingComponent },
  // { path: 'bookings/create', component: BookingFormsComponent },
  { path: 'bookings/:id', component: BookingFormsComponent },
  { path: 'bookings/:id/update', component: BookingFormsComponent },
  { path: 'messages/:id', component: ProfilemessageComponent },
  {
    path: 'establishments/:id/update',
    component: EstablishmentInscriptionComponent,
  },
  { path: 'messages/lists', component: ListMessageComponent },
  { path: 'messages', component: ProfilemessageComponent },
  { path: 'details/profile', component: DetailsProfileComponent },
  { path: '', component: CategorieComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
