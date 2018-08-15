
# Eat-Da-Burger

* `EAT-DA-BURGER` is a restaurant app that lets visiting users input the names of burgers they'd like to eat, which are added to a menu titled "Uneaten".

* `Each` burger appears dynamically on screen under the `Uneaten` menu list with a button, `Devour`.

* `Devour` on click will send the burger over to the `Eaten` list.

## HOW

* The app communicates with a `mysql` database to store burger data. The on screen buttons trigger get or post requests via `express` to fetch or update the appropriate data and render the response on screen appropriately.

* `EAT-DA-BURGER` is running live on [Heroku](https://google.com) 
