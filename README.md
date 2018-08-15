
# Eat-Da-Burger

* `EAT-DA-BURGER` is a restaurant app that allows users to input the names of burgers they'd like to eat, which are added to a menu titled "Uneaten" and/or "devour" them.

* Newly created `burgers` appear dynamically on screen under the `Uneaten` menu list.

* Each `Uneaten` burger comes with a `Devour` button.

* On click, `Devour` will send the burger over to the `Eaten` list.

### Summary

* The app communicates with a `mysql` database to fetch or store new burger data. The on screen buttons trigger get or post requests via `express` to fetch or update the appropriate burger data -- the response is rendered in the view appropriately.

* `EAT-DA-BURGER` is running live on [Heroku](https://google.com) 
