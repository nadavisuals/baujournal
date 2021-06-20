# Diplomarbeit Baujournal

## Projekt Setup
- GIT Repository clonen oder ZIP download
- Via terminal in den Ordner 'client' wechseln und `$ npm install` ausführen -> dependencies werden installiert
- Via terminal in den Ordner 'server' wechseln und `$ npm install` ausführen -> dependencies werden installiert
- MongoDB installieren 
    - Compass lokal installieren https://docs.mongodb.com/compass/master/install/ 
    - oder MongoDB Atlas online https://www.mongodb.com/cloud/atlas verwenden
- Im Ordner 'server' das File .env.dev zu .env umbenennen und Inhalt anpassen. 
  (Beim download von OpenOlat muss nur Inhalt von .env angepasst werden)
    - Bei 'DATABASE' den entsprechenden Datenbank MongoDB Pfad einfügen. (Lokal oder auf MongoDB Atlas)
    - Bei 'JWT_SECRET' irgend ein beliebiges Passwort einfügen
- Unter client/src/constants/constants.js die backend_url: auf "http://localhost:5001" umstellen
- Um die App zu nutzen muss man sich einloggen. Hierfür muss in der MongoDB Datenbank ein User und Passwort angelegt werden.
    - Hierfür muss der Server laufen. Via terminal im Ordner 'server' `$ npm start` ausführen
    - Danach zum Beispiel mit den API Clients Postman oder Insomnia folgenden JSON Post request absenden:

![Postman Beispiel](https://user-images.githubusercontent.com/44897257/122690850-18b76c00-d22c-11eb-91b0-93e33e27fba0.JPG)

Post: http://localhost:5001/user/register <br />
```
{
    "email": "example@test.com",
    "password": "examplePassword",
    "passwordCheck": "examplePassword"
}
```

## App starten
- Via terminal im Ordner 'server' `$ npm start` oder `$ nodemon server` ausführen
- Via terminal im Ordner 'client' `$ npm start` ausführen
- Danach Anmelden mit erstelltem User und Passwort

## Live Demo
Eine Demo Version der App ist unter folgendem Link zu finden:<br />
https://baujournal.netlify.app/<br />
Für Prüfungs-Experte ist das Passwort in einem .txt File auf OpenOlat im Abgabeordner abgelegt


### Netlify Status Badge
[![Netlify Status](https://api.netlify.com/api/v1/badges/6148a39c-fc5d-45d8-baa4-b77a6396a173/deploy-status)](https://app.netlify.com/sites/baujournal/deploys)

