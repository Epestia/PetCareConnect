CREATE TABLE Rendez_vous(
   Date_heure_id VARCHAR(250),
   Date_heure_Rdv DATETIME,
   V�terinaire_attribu� VARCHAR(250) NOT NULL,
   Etat_rdv VARCHAR(250) NOT NULL,
   PRIMARY KEY(Date_heure_id)
);