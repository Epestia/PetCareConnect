import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DonsComponent } from './components/dons/dons.component';
import { ForumComponent } from './components/forum/forum.component';
import { RessourcesComponent } from './components/ressources/ressources.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { PartenariatsComponent } from './components/partenariats/partenariats.component';
import { EvenementsComponent } from './components/evenements/evenements.component';
import { LoginComponent } from './components/login/login.component';
import { EspacePersonnelComponent } from './components/espace-personnel/espace-personnel.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesPComponent } from './components/services-p/services-p.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddNewsletterComponent } from './components/add-newsletter/add-newsletter.component'; 



const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'dons', component: DonsComponent },
  { path: 'forum', component: ForumComponent},
  { path: 'ressources', component: RessourcesComponent },
  { path: 'partenariats', component: PartenariatsComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'newsletter', component: NewsletterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'espace', component: EspacePersonnelComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'service', component: ServicesPComponent},
  { path: 'signUp', component: SignUpComponent},
  { path: 'add-newsletter', component: AddNewsletterComponent },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
