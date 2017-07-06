"use strict";
/**
 * Created by olm on 7/6/17.
 * stores error_text, translations
 */
Object.defineProperty(exports, "__esModule", { value: true });
var errors = (function () {
    function errors() {
        this.en = {
            "email": "Please enter a valid e-mail address",
            "password": "Please enter a valid password",
            "pin": "Enter PIN consisting of 4 digits",
            "sQuestion": "Please select a security question",
            "sAnswer": "Please enter security answer",
            "gender": "Please select gender",
            "fistName": "Please enter first name",
            "lastName": "Please enter last name",
            "street": "Please enter street",
            "streetNumber": "No.",
            "postCode": "Postcode",
            "city": "Please enter city",
            "mobilePhone": "Please enter mobile phone number",
            "dateOfBirth": "Please select valid date of birth",
            "licence": "Please enter the number of your driving licence.",
            "licenceDate": "Please select issuing date",
            "preferredCity": "Please select preferred city"
        };
        this.fi = {
            "email": "Syötä kelvollinen sähköpostiosoite",
            "password": "Syötä kelvollinen salasana",
            "pin": "Anna 4-numeroinen pääsykoodisi",
            "sQuestion": "Valitse varmistuskysymys",
            "sAnswer": "Syötä vastaus varmistuskysymykseen",
            "gender": "Valitse sukupuoli",
            "fistName": "Syötä etunimi",
            "lastName": "Syötä sukunimi",
            "street": "Syötä kadunnimi",
            "streetNumber": "Katunro",
            "postCode": "Postinumero",
            "city": "Syötä postitoimipaikka",
            "mobilePhone": "Syötä matkapuhelinnumero",
            "dateOfBirth": "Valitse kelvollinen syntymäaika",
            "licence": "Syötä ajokorttisi numero.",
            "licenceDate": "Valitse myöntämispäivä",
            "confirmation": "Olemme lähettäneet sähköpostin osoitteeseen meetjoeb11ack+1498723830@gmail.com ja tekstiviestin numeroon 00380939177068."
        };
        this.de = {
            "email": "Bitte gültige E-Mail-Adresse eingeben",
            "password": "Bitte gültiges Passwort eingeben",
            "pin": "Bitte PIN bestehend aus 4 Ziffern eingeben",
            "sQuestion": "Bitte Sicherheitsfrage auswählen",
            "sAnswer": "Bitte Antwort auf Sicherheitsfrage eingeben",
            "gender": "Bitte Anrede wählen",
            "fistName": "Bitte Vorname eingeben",
            "lastName": "Bitte Nachname eingeben",
            "street": "Bitte Straße eingeben",
            "streetNumber": "Nr.",
            "postCode": "PLZ",
            "city": "Bitte Ort eingeben",
            "mobilePhone": "Bitte gültige Mobilfunknummer eingeben",
            "preferredCity": "Bitte bevorzugte Stadt auswählen",
            "dateOfBirth": "Bitte gültiges Geburtsdatum auswählen",
            "licence": "Please enter the number of your driving licence.",
            "licenceDate": "Please select issuing date",
            "cardProvider": "Bitte Kartenanbieter auswählen",
            "cardNumber": "Bitte gültige Kreditkartennummer eingeben",
            "cardDates": "Bitte gültigen Wert eingeben",
            "cvvCode": "Bitte Sicherheitscode eingeben"
        };
        this.it = {
            //page 1
            "email": "Inserisci un indirizzo e-mail valido",
            "password": "Inserisci una password valida",
            "pin": "Inserisci il PIN di 4 cifre",
            "sQuestion": "Seleziona una domanda di sicurezza",
            "sAnswer": "Inserisci la risposta alla domanda di sicurezza",
            //page 2
            "gender": "Seleziona il sesso",
            "fistName": "Inserisci il nome",
            "lastName": "Inserisci il cognome",
            "street": "Inserisci la via",
            "streetNumber": "N.",
            "postCode": "Codice postale",
            "city": "Inserisci la città",
            "mobilePhone": "Inserisci il numero di cellulare",
            "dateOfBirth": "Seleziona una data di nascita valida",
            "fiscalCode": "Per favore inserisci un Codice Fiscale valido.",
            //page 3
            "licence": "Inserisci il numero della patente di guida.",
            "licenceDate": "Seleziona la data di emissione",
            //page 4
            "cardProvider": "Seleziona il gestore della carta",
            "cardNumber": "Inserisci il numero di carta di credito",
            "cardDates": "Inserisci un numero valido",
            "cvvCode": "Inserisci il codice di sicurezza"
        };
    }
    return errors;
}());
exports.errors = errors;
