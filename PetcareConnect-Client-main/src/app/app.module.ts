import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DonsComponent } from './components/dons/dons.component';
import { ForumComponent } from './components/forum/forum.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PartenariatsComponent } from './components/partenariats/partenariats.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './_services/auth.service';
import { FooterComponent } from './shared/footer/footer.component';
import { EspacePersonnelComponent } from './components/espace-personnel/espace-personnel.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesPComponent } from './components/services-p/services-p.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddNewsletterComponent } from './components/add-newsletter/add-newsletter.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ForumComponent,
    RessourcesComponent,
    NewsletterComponent,
    PartenariatsComponent,
    EvenementsComponent,
    DonsComponent,
    LoginComponent,
    FooterComponent,
    ForumComponent,
    EspacePersonnelComponent,
    ContactComponent,
    ServicesPComponent,
    SignUpComponent,
    AddNewsletterComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
