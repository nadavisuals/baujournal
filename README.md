# Diplomarbeit Baujournal

## Project Setup
- GIT Repository clonen oder ZIP download
- Via terminal im Ordner 'server' `$ npm install` ausführen
- Via terminal im Ordner 'client' `$ npm install` ausführen
- Im Ordner 'server' im .env file bei 'DATABASE' den entsprechenden Datenbank MongoDB Pfad einfügen. (Lokal oder Online MongoDB Atlas)
- In der MongoDB Datenbank ein User und Passwort anlegen. Zum Beispiel mit API Client Postman oder Insomnia

Post: http://localhost:5001/user/register <br />
`
{
    "email": "example@test.com",
    "password": "example@test",
    "passwordCheck": "example@test"
}
`
## App starten
- Via terminal im Ordner 'server' `$ npm start` ausführen
- Via terminal im Ordner 'client' `$ npm start` ausführen


## Demo
Eine Deployte Version der App ist unter folgendem Link zu finden:<br />
https://baujournal.herokuapp.com/<br />
Für Experte ist das Passwort in einem .txt File auf OpenOlat Abgabeordner abgelegt


### Netlify Status Badge
[![Netlify Status](https://api.netlify.com/api/v1/badges/6148a39c-fc5d-45d8-baa4-b77a6396a173/deploy-status)](https://app.netlify.com/sites/baujournal/deploys)

