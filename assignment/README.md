# Praktijkopdracht

Voor CLE ga je aan de slag om met je team een website te bouwen. Binnen die website ontwikkeld ieder lid een eigen pagina
die zal gelden als praktijkopdracht voor Programmeren 3.

In deze opdracht ontwikkel je een eigen pagina met een frontend waarin interactie plaatsvind en data wordt ingeladen
zonder dat de pagina ververst wordt. Deze opdracht is verdeeld in onderstaande deelopdrachten om dit stap voor stap te
ontwikkelen. Je bent helemaal vrij in de vorm van deze pagina, zolang de randvoorwaarden (technisch, functioneel) in basis
gelijk zijn aan onze voorbeeldcase genaamd de [foodmagazine](foodmagazine-exampe). Deze case dient als inspiratie welke
functionaliteiten er nodig zijn voor de door ons gestelde eisen. Een voorbeeld video van de werking kun je vinden op
FeedbackFruits in het mapje 'Praktijkopdracht'.

## Opdracht 1

- Via Github maak je een project aan waar je met 4 teamgenoten in zit. Clone deze repository op de machine van elke 
  teamgenoot. Doe dit in de htdocs map van XAMPP zodat je het project via **http://localhost/<projectnaam>** kunt benaderen.
- Zorg ervoor dat je de [initiële code](webservice-start) lokaal kopieert naar dit nieuwe project, zodat je
  kunt starten met de opdracht. Geef de mapnaam een logische naam zodat alle 4 de webservices in jullie team van elkaar
  te onderscheiden zijn.
- Pas de informatie in `actions.php` aan naar eigen informatie die voor je webservice relevant is. Zorg ervoor dat er
  minimaal 10 items instaan zodat je voldoende data hebt.
- Test de JSON-output van je webservice in de browser op **http://localhost/<projectnaam>/<webservice-mapnaam>** om te zien of
  de output klopt. Gebruik eventueel de [Chrome plugin](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en).
___
>**Belangrijk**: Gebruik voor Opdracht 2/3/4 eigen teksten en plaatjes, omdat we pas in Opdracht 5 de koppeling naar de 
Webservice uit Opdracht 1 gaan maken.
___
## Opdracht 2 (zonder AJAX)

- Bepaal als team welke HTML/CSS-methode je voor de website gaat gebruiken (zelf schrijven, Bulma of iets anders). Zorg ervoor 
  dat je het als team hierover eens bent om te zorgen dat de pagina's allemaal in dezelfde style gemaakt worden. Implementeer
  deze gemaakte keuze binnen je Github project. Denk hierbij aan alles lessen die je hebt geleerd tijdens de module "Frontend
  Development" in kwartaal 1. Zeker nu je werkt voor een doelgroep is het belangrijk dat je een gebruiksvriendelijke en mooie
  website oplevert.
- Maak je eigen HTML-pagina aan aan waar jouw werk komt te staan. Begin met het opmaken van de layout zoals jij wilt dat je 
  werk eruit komt te zien. Zorg ervoor dat er minimaal 10 items zichtbaar zijn met informatie over jouw onderwerp.

## Opdracht 3 (zonder AJAX)

- Maak je opdracht dynamisch door click events toe te voegen aan je items. Na een click op een item opent de detailweergave.
  Als je een ander item aanklikt, wordt de detailweergave (meer informatie over je item) vervangen door het andere aangeklikte item.
- Zorg ervoor dat de detailinformatie er ook goed uitziet in je layout met HTML/CSS. Dit kan zijn in een sidebar, onderaan of via
  een modal (popup).

## Opdracht 4 (zonder AJAX)

- Ontwikkel de functionaliteit om items als favoriet toe te voegen. Dit doe je door de favorieten in je localstorage
  op te slaan. Voeg in het overzicht per item een "voeg toe als favoriet knop" toe om het aan deze functionaliteit
  via een click event werkend te maken.
- Zorg met CSS dat de favoriet een andere kleur heeft. Deze kleur moet ook na het herladen van de pagina blijven staan
  door je local storage te raadplegen.
- Zorg ervoor dat de items die favoriet zijn een knop krijgen om ze weer te verwijderen uit je favorieten. Uiteraard
  dient de kleur dan weer teruggezet te worden en de localstorage geüpdatet te worden.

## Opdracht 5

- Koppel de ontwikkelde functionaliteit aan de webservice die in opdracht 1 is gemaakt, zodat zowel de initiële data als
  de detailweergave vanuit de PHP via AJAX worden ingeladen en met Javascript op je scherm komen.
- **Belangrijk**: Bij het inladen van je pagina staat er nog niets op je scherm, omdat AJAX nodig is om de data in
  te laden. Je eerder gemaakte HTML zul je nu dus vanuit Javascript moeten opbouwen.
- Zorg dat de linkjes van de plaatjes ook uit de webservice komen, hier moet je, als je dit nog niet had, de array uit de webservice dus 
  voor uitbreiden.

## Opdracht 6 (Bonus opties voor mogelijk extra punt)

- Verander de backend zo dat de PHP-arrays uit een database komen. Gebruik hiervoor een vergelijkbaar [ERD](foodmagazine-exampe/optioneel_erd.png)
- Haal de foto's op uit de Instagram of Flickr API in plaats van de plaatjes zelf op te slaan.
- Maak een uitgebreidere HTML/CSS-variant waarin je bijvoorbeeld een SCSS-structuur gebruikt, of een specifiek HTML of CSS
  framework. (bulma, bootstrap & tailwind tellen niet als framework)
- Schrijf je PHP backend volledig OOP op basis van opgedane kennis tijdens de Advanced PHP lessen.
- Schrijf de Javascript op een professionelere manier via objecten, en pas technieken zoals arrow functions en/of
  promises toe.
---
>**Twijfel je over bonuspunten, of heb je een eigen suggestie, bespreek dit dan met je docent!**
