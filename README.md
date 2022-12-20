# COG Demo App

1. Registration
2. Login
3. Home
4. Cart System


# Home Page Documentation

## Request
* All the POST GET Requests are stored at the `request folder`.

## Enums
* All the enums are stored in the `enum folder`.

## Functions/ Common Functions/ Mostly Using Functions
* All of the normal, common, and mostly using functions are stored at the `functions folder`.

## Global State Handler
* All the Global States are handling using "react-hooks-global-state" package.
* All the global states are intiated in the `global folder`.
* We can use the React Redux or Flux in the future.

## Assets/ Images of Items
* Images of items are still stored in the `assets folder` but in the future we have to remove those item images from web application and we have to link URLs of item images using the datatable which has relationship with the items.

## Protected Route
* We have protected the routes of web application using the `Protected Route` Method.
* TODO: Using the ProtectedAdminRoute to protect the Admin pages.
* TODO: Using the protectedUserRoute to protect the user pages.

## Views
* All the views are stored at the `views folder`.

## Item Navbar in Header
* Should be changed by the User Behavior, Still we have not consider the user behavior part.

## Category NavBar
* If a category has not exist any single sub catgories then the dropdown for the particular main category will not be executed.
* Only 3 level of sub categories are considering in this demo application.
* TODO: Code should change to have myktiple more sub categories (should create algorithm for that)

## Hot rentals, Most searched rentals, New rentals, Rental catgories
* Used common component named "LevelOneBox.js".
* That component exist with 4 items. 
* We have to pass `ItemIds` or `itemArray` from Home page considering user behaviors, town, most bought items and random items
* How we create `itemArray`? 
* TODO: set `itemArray`

## 