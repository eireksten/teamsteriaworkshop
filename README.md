MEAN Workshop - Team Steria
==================

## Velkommen til workshop!

 I denne workshopen skal vi lage vår egen versjon av Team Steria, som er en side for å registrere trening. Alt man
 registrerer gir poeng, som lar en klatre på highscorelisten.

***

Prerequisites
 1. Installer Git (http://git-scm.com/)
 2. Installer MongoDB (http://www.mongodb.org/downloads)
 3. Installer node.js (http://nodejs.org/)
 4. Installer express (npm install -g express)
 5. Installer bower (npm install -g bower)

1. Get up and running!
 1. Klone dette repositoryet til en lokal mappe (```git clone https://github.com/eireksten/teamsteriaworkshop.git```)
 2. Installere server side dependencies (fra prosjektmappen, kjør ```npm install```)
 3. Start opp MongoDB lokalt (kjør ```mongodb/bin/mongod```)
 4. Legg inn angularJS i prosjektet vha bower. Kjør ```bower install angular```, og den vil legge seg utfra hvor det er definert i ```.bowerrc```.
 Dersom du vil legge den et annet sted, endrer du ```.bowerrc```, og også i ```views/layout.jade```, hvor den hentes inn i koden.
 5. kjør ```node app.js``` (i mappen) for å starte applikasjonen
 6. Åpne "http://localhost:3000/" og se at applikasjonen er i gang! Du skal ha fått opp en liste med tre brukere.

2. Fjern defaultbrukerne fra koden.
 1. Nå når brukerne er lagt inn i databasen din, kan du fjerne dem fra koden. Hvis ikke, vil de oppdateres til 'default' tilstand ved hver oppstart.
 2. Åpne ```app.js``` og fjern linjene som begynner med ```Users.update```

3. Prøv å sortere listen med brukere
 1. Ta en kikk på filene ```models/user.js```, ```public/js/teamSteriaController.js```, og ```views/index.jade```. Førstnevnte er definisjonen
 av en bruker (mongoDB), nummer to er en fil for frontendkode, mens den siste er templaten som brukes for å generere hovedsiden i appen.
 2. Listen er først tilgjengelig i controllerens ```init```-metode. Se hva som skjer hvis du sorterer listen herfra. ```users``` er en array med User-objekter,
 3. Slike vanlige problemer har angularJS standard måter å løse på. Se om du klarer å erstatte sorteringen fra
 forrige punkt med å la ```ng-repeat``` alltid håndtere listen i sortert rekkefølge. Får du til dette, vil enhver endring
 i users-listen reflekteres på siden umiddelbart.

4. Lag et skjema for å legge inn ny bruker
 1. Start med å skrive et enkelt html-skjema i jade. Du trenger input-felt for navnet på brukeren og en submit-knapp.
 2. Angular har flere direktives for å hjelpe deg med forms. ```ng-submit``` kan legges på formen for å trigge en funksjon når den submittes.
 Lag en submitfunksjon på ```$scope``` som trigges når man trykker på submit-knappen. Kall alert eller noe for å verifisere at den blir kalt.
 3. ```ng-model``` kan brukes til å knytte et inputfelt opp mot et objekt som er lagt på ```$scope```. Opprett en ny variabel på
 ```$scope``` som holder på verdien i input-feltet for navnet.
 4. Oppdater submit-funksjonen slik at den blanker ut navnefeltet når man submitter.
 5. Oppdater submit-funksjonen slik at den legger en ny bruker inn i users-listen når man submitter.

5. Persister den nye brukeren på serveren
 1. I ```app.js``` er det definert to routes for å henholdsvis opprette og oppdatere brukere. Disse er definert på linjene som starter med henholdsvis
 ```app.post``` og ```app.put```. Selve håndteringen av disse finner du i ```routes/user.js```. Ta en kikk på disse.
 2. I tillegg til ```$scope```, får en angular-controller inn servicen ```$http``` som parameter. Denne kan brukes til blant annet å sende kall til server.
 Legg til et POST-kall til ```/user.json```, slik at brukeren opprettes i databasen (og dermed ikke forsvinner ved refresh). Dokumentasjon for $http finner du på
 http://docs.angularjs.org/api/ng.$http

6. Vis en liste med aktiviteter for hver bruker.

7. Lag funksjonalitet for å legge inn en ny aktivitet på en bruker. Pass på at score for brukeren må oppdateres tilsvarende.


Nå er du godt i gang med å lage en flott side for Team Steria! Videre kan du forsøke å style denne og legge til ny funksjonalitet du synes passer seg å ha her. Eksempler kan være
aktivitetsfeed, expand/collapse av aktivitetslistene, sletting av brukere, rosa bakgrunn, animasjoner, eller hva du måtte klare å komme på. Enjoy!

***

### Tips og Triks

- Ikke bruk Cygwin! Cygwin fungerer dårlig med node, og Git Bash er minst like bra i utgangspunktet.

- bower install <funnyfrontendmodule> legger til <funnyfrontendmodule> i mappen definert i .bowerrc
  - bower install bootstrap-css
  - bower install bootstrap-javascript
  - bower install underscore
  - bower install angular
  - bower install angular-bootstrap