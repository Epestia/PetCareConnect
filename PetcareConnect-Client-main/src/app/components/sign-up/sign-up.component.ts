// src/app/sign-up/sign-up.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  utilisateurId = '';
  pseudoUtilisateur = '';
  prenomUtilisateur = '';
  nomUtilisateur = '';
  adresseMail = '';
  motsDePasse = '';
  selectedRole = 'client';
  numeroVet = '';

  onSubmit() {
    // Ajoutez ici la logique de traitement du formulaire de sign-up
    console.log('Formulaire de sign-up soumis !', this.utilisateurId, this.pseudoUtilisateur, this.adresseMail, this.motsDePasse, this.selectedRole, this.numeroVet);
  }
}
