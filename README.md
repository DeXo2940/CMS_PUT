# CMS_PUT
# Dokumentacja

## Baza danych

Wykorzystywany jest PostgresSQL postawiony w Dockerze.\
By ją uruchomić, należy wykonać skrypt \
`db.sh`,\
lub wykonać\
`docker run -d -p 5432:5432 --name postgres -e POSTGRES_PASSWORD=postgres -v /srv/put/cms:/data/db postgres:13.2`\
 w wierszu poleceń.\
Do uruchomienia wymagany jest Docker.

Ewentualnie można samemu skonfigurować bazę danych (używając np. narzędzia PgAdmin). Hasło i username można ustawić w pliku application.yml. 

## Backend

Backend napisany jest w Javie z wykorzystaniem frameworku Spring Boot. Aplikacja działa na serwerze embedded Tomcat (domyślna opcja dla Spring Boota).
Backend wystawia REST api..\
Komunikację z bazą danych zapewwnia najpopularniejsza implementacja standardu JPA - Hibernate.
Aplikacja jest budowana za pomocą Mavena..

## Frontend

Za wygląd i zachowanie Frontendu odpowiadaja React z TypeScriptem. Aplikacja została wygenerowana za pomocą Create React App.\
Komponenty UI zapewnia biblioteka Material UI dla Reacta. Dodatkowe zmiany z wyglądzie zapewnia biblioteka styled-components (tzw CSS-in-JS).  \
Nawigację pomiędzy stronami zapewnia React Router.
Aplikację można uruchomić (developersko) z użyciem npm.
By ją uruchomić należy wykonać polecenie\
`npm i && npm start`.

Wersja developerska konfiguruje proxy, dzięki której zapytania RESTowe są przekierowywane na port 8080. W przypadku budowy wersji produkcyjnej należałoby użyć np. Nginxa, aby skonfigurować odpowiednie przekierowania.


# Korzystanie z aplikacji

## Przeglądanie listy gier

W celu przeglądania listy dodanych gier należy wybrać 'See all games' z paska menu. Wyświetlą się wszystkie dodane gry.

## Kontakt

By wysłać wiadomość e-mail w celu kontaktu z właścicielem strony należy wybrać 'Contact us' z paska menu i wypełnić wymagane pola formularza.\
Request nie jest obsługiwany przez serwer w obecnej wersji aplikacji.

## Dodawanie gier

Dodawanie gier wymaga włączenia trybu administratora ('Administration mode').\
By dodać grę należy wybrać 'Add new game' z paska menu i wypełnić wymagane pola. Proces kończy wybranie 'Add game'.

## Modyfikacja gier

Modyfikacja gier wymaga włączenia trybu administratora ('Administration mode').\
Modyfikacja gier jest możliwa po wybraniu 'Manage games'/'See All games' z paska menu i wybraniu przycisku 'Edit' pod wybraną pozycją.\
Zmian dokonuje się poprzez zmianę wartości pól formularza i zatwierdzenie ich poprzez 'Save Update'.

## Usuwanie gier

Usuwanie  gier wymaga włączenia trybu administratora ('Administration mode').\
Usuwanie gier jest możliwa po wybraniu 'Manage games'/'See All games' z paska menu i wybraniu przycisku 'Delete' pod wybraną pozycją.\
Pozycja zostaje od razu usunięta.
