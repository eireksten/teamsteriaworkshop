MEAN Workshop - Team Steria
==================

## Velkommen til workshop!

 For å begynne:
 - clone repo til en lokal mappe :)
 - kjør npm install på mappen
 - kjør "mongod" for å starte mongodb
 - kjør "node app.js" (i mappen) for å starte applikasjonen
 - åpne "http://localhost:3000/" for å se siden!

 ..oooog da er vi igang! Nå har du backend servert på et sølvfat og kan begynne på frontend-delen <3

 ***

## Litt drahjelp for n00bs:

- cygwin støtter ikke node, så ingen vits i å bruke cygwin.
- det kan være lurt å installere underscore :)
- bower install <funnyfrontendmodule> legger til <funnyfrontendmodule> i mappen definert i .bowerrc
  - bower install bootstrap-css
  - bower install bootstrap-javascript
  - bower install underscore
  - bower install angular
  - bower install angular-bootstrap

### Hva finnes i denne koden fra før

- models: mongoDB-skjemaer
- public: Filer som er aksesserbare over web (f.eks. bilder, frontendkode, css)
- routes: moduler for å håndtere http-requester
- views: jade-filer (eller andre templates). Brukes til å generere html.
- app.js: Oppstartsscriptet for appen. Kobling mellom url og http-request ligger her.
- package.json: dependency management for npm