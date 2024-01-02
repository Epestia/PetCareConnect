CREATE TABLE Utilisateurs(
   Utilisateur_id VARCHAR(250),
   Pseudo_utilisateur VARCHAR(250) NOT NULL,
   Prenom_utilisateur VARCHAR(250),
   Nom_utilisateur VARCHAR(250),
   Adresse_mail VARCHAR(250) NOT NULL,
   Mots_de_passe VARCHAR(250) NOT NULL,
   RoleUtilisateur VARCHAR(250) NOT NULL,
   PRIMARY KEY(Utilisateur_id)
);