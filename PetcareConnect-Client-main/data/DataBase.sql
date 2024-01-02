-- creation de la base de donnée PetCareConnect
CREATE DATABASE PetCareConnect;

-- Création de la table Actions_social
CREATE TABLE Actions_social (
   Action_social_id VARCHAR(50),
   Descriptions VARCHAR(50),
   Temoignages VARCHAR(50),
   Liens_Dons VARCHAR(50),
   PRIMARY KEY (Action_social_id)
);

-- Création de la table Articles
CREATE TABLE Articles (
   Articles_id VARCHAR(50),
   Titre VARCHAR(50) NOT NULL,
   Contenues TEXT NOT NULL, -- Utilisation de TEXT pour contenir un contenu potentiellement plus long
   Descriptions_articles VARCHAR(50),
   Date_publication DATE NOT NULL,
   TypeArticles Varchar (50) NOT NULL,
   PRIMARY KEY (Articles_id)
);

-- Création de la table Dons
CREATE TABLE Dons (
   Dons_id VARCHAR(50),
   Montants DECIMAL(15, 2) NOT NULL,
   Date_dons DATE,
   Option_paiement VARCHAR(50),
   Statuts VARCHAR(50),
   PRIMARY KEY (Dons_id)
);

-- Création de la table Rendez-vous
CREATE TABLE Rendez_vous (
   Date_heure_id VARCHAR(50),
   Date_heure_Rdv DATETIME,
   Veterinaire_attribue VARCHAR(50) NOT NULL, -- Correction de l'orthographe de "Vétérinaire_attribué"
   Etat_rdv VARCHAR(50) NOT NULL,
   PRIMARY KEY (Date_heure_id)
);

-- Création de la table Utilisateurs
CREATE TABLE Utilisateurs (
   Utilisateur_id VARCHAR(50),
   Pseudo_utilisateur VARCHAR(50) NOT NULL,
   Prenom_utilisateur VARCHAR(50),
   Nom_utilisateur VARCHAR(50),
   Adresse_mail VARCHAR(50) NOT NULL,
   Mots_de_passe VARCHAR(50) NOT NULL,
   RoleUtilisateur VARCHAR(250) NOT NULL,
   PRIMARY KEY (Utilisateur_id)
);

-- Création de la table Veterinaires
CREATE TABLE Veterinaires (
   Veterinaire_id VARCHAR(50),
   Pseudo_veterinaire VARCHAR(50), -- Correction de la casse de "Pseudo_veterinaire"
   Nom_veterinaire VARCHAR(50) NOT NULL,
   Prenom_veterinaire VARCHAR(50),
   Mail_veterinaire VARCHAR(50),
   Mot_de_passe_veterinaire VARCHAR(50),
   NumeroOrdreVeterinaires VARCHAR(250),
   PRIMARY KEY (Veterinaire_id)
);

-- Création de la table Newsletter
CREATE TABLE Newsletter (
    Newsletter_id VARCHAR(50),
    TitreNewsletter VARCHAR(50),
    TextNewsletter TEXT, -- Utilisation de TEXT pour contenir un texte potentiellement plus long
    ConseilNewsletter VARCHAR(250), -- Correction de la casse de "ConseilNewsletter"
    EvenementNewsletter DATE,
    PRIMARY KEY (Newsletter_id)
);

-- Création de la table Contacts
CREATE TABLE Contacts (
   Contacts_id VARCHAR(50),
   NomContacts VARCHAR(50),
   PrenomContacts VARCHAR(50), -- Correction du type de données à DATETIME à VARCHAR(50)
   MailContacts VARCHAR(50) NOT NULL,
   MessageContacts VARCHAR(50) NOT NULL,
   PRIMARY KEY (Contacts_id)
);

-- Creation de la table Animaux 
CREATE TABLE Animaux (
    Animal_id VARCHAR(50),
    Proprietaire_id VARCHAR(50), -- Clé étrangère vers une table de Utilisateurs (propriétaires)
    Nom_animal VARCHAR(50),
    Espece VARCHAR(50),
    Race VARCHAR(50),
    Date_naissance DATE,
    Id_puce_animal int,
    PRIMARY KEY (Animal_id)
);
