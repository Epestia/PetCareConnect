CREATE TABLE Rendez_vous(
   Date_heure_id VARCHAR(250),
   Date_heure_Rdv DATETIME,
   Véterinaire_attribué VARCHAR(250) NOT NULL,
   Etat_rdv VARCHAR(250) NOT NULL,
   PRIMARY KEY(Date_heure_id)
);