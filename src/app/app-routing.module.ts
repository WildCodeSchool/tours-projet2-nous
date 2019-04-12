import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { EstablishmentInscriptionComponent } from './establishment-inscription/establishment-inscription.component';

const routes: Routes = [
  { path: 'establishments/:id', component: EstablishmentInscriptionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
