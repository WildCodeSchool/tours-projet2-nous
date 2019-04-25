import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingFormsComponent } from './booking-forms/booking-forms.component';
import { HomeComponent } from './home/home.component';
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
import { ListMessageComponent } from './list-message/list-message.component';
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingFormsComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    SearchbarComponent,
    CategorieComponent,
    ProfileComponent,
    EstablishmentInscriptionComponent,
    ProfilemessageComponent,
    ListMessageComponent,
    AppComponent,
    LoginComponent,
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
  ]
})
export class AppModule { }
