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
 1. Klone dette repositoryet til en lokal mappe (git clone https://github.com/eireksten/teamsteriaworkshop.git)
 2. Installere server side dependencies (fra prosjektmappen, kjør 'npm install')
 3. Start opp MongoDB lokalt (kjør mongodb/bin/mongod)
 4. kjør "node app.js" (i mappen) for å starte applikasjonen
 5. Åpne "http://localhost:3000/" og se at applikasjonen er i gang! Du skal ha fått opp en liste med tre brukere.

2. Fjern defaultbrukerne fra koden.
 1. Nå når brukerne er lagt inn i databasen din, må du fjerne dem fra koden.
 2. Åpne 'app.js' og fjern linjene som begynner med 'new Users'

3. Prøv å sortere listen med brukere
 1. Ta en kikk på filene models/user.js, public/js/teamSteriaController, og views/index.jade. Førstnevnte er definisjonen
 av en bruker (mongoDB), nummer to er en fil for frontendkode, mens den siste er templaten som brukes for å generere hovedsiden i appen.
 2. Listen er først tilgjengelig i controllerens init-metode. Se hva som skjer hvis du sorterer listen herfra. users er en array med User-objekter,
 3. Slike vanlige problemer har angularJS standard måter å løse på. Se om du klarer å erstatte sorteringen fra
 forrige punkt med å la ng-repeat alltid håndtere listen i sortert rekkefølge. Får du til dette, vil enhver endring
 i users-listen reflekteres på siden umiddelbart.

4. Lag et skjema for å legge inn ny bruker

5. Vis en liste med aktiviteter for hver bruker

***

### Hvilke filer må jeg endre i?

- models: mongoDB-skjemaer
- public: Filer som er aksesserbare over web (f.eks. bilder, frontendkode, css)
- routes: moduler for å håndtere http-requester
- views: jade-filer (eller andre templates). Brukes til å generere html.
- app.js: Oppstartsscriptet for appen. Kobling mellom url og http-request ligger her.
- package.json: dependency management for npm

### Tips og Triks

- Ikke bruk Cygwin! Cygwin fungerer dårlig med node, og Git Bash er minst like bra i utgangspunktet.

- bower install <funnyfrontendmodule> legger til <funnyfrontendmodule> i mappen definert i .bowerrc
  - bower install bootstrap-css
  - bower install bootstrap-javascript
  - bower install underscore
  - bower install angular
  - bower install angular-bootstrap