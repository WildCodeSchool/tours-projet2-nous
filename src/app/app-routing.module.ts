import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { EstablishmentInscriptionComponent }
  from './establishment-inscription/establishment-inscription.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProfilemessageComponent } from './profilemessage/profilemessage.component';
import { ListEstablishmentComponent } from './list-establishment/list-establishment.component';
import { DetailListEstablischmentComponent } from
'./detail-list-establischment/detail-list-establischment.component';

const routes: Routes = [
  { path:'establishments/create', component: EstablishmentInscriptionComponent },
  { path:'establishments/details', component: DetailListEstablischmentComponent  },
  { path:'profiles/establishments', component: ListEstablishmentComponent  },
  { path: 'establishments/:id', component: EstablishmentInscriptionComponent },
  { path: '', component: CategorieComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'bookings/:id', component: BookingFormsComponent },
  { path:'messages/:id', component:ProfilemessageComponent },
  { path:'establishments/:id/update', component: EstablishmentInscriptionComponent },
  { path:'profiles/establishments', component: ListEstablishmentComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
