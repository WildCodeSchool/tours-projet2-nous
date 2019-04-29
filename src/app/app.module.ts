import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfilemessageComponent } from './profilemessage/profilemessage.component';
import { JwtModule } from '@auth0/angular-jwt';
import { EstablishmentInscriptionComponent }
from './establishment-inscription/establishment-inscription.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ListeBookingComponent } from './liste-booking/liste-booking.component';
import { ListEstablishmentComponent } from './list-establishment/list-establishment.component';
// tslint:disable-next-line: max-line-length
import { DetailListEstablischmentComponent } from './detail-list-establischment/detail-list-establischment.component';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { LoginComponent } from './login/login.component';
import { DetailsProfileComponent } from './details-profile/details-profile.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingFormsComponent,
    NavBarComponent,
    FooterComponent,
    SearchbarComponent,
    CategorieComponent,
    ProfileComponent,
    EstablishmentInscriptionComponent,
    ProfilemessageComponent,
    ListeBookingComponent,
    ListEstablishmentComponent,
    DetailListEstablischmentComponent,
    AppComponent,
    LoginComponent,
    DetailsProfileComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TimePickerModule,
    DropDownListModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['open-reza.herokuapp.com'],
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    DropDownListComponent,
  ],
})
export class AppModule { }
