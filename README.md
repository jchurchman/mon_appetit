# mon_appetit
## Codefellows PDX SPR 301 Team project

#### _with_ Mark Petrie, Michele Greenwood, and Joe Churchman

_Mon Appetit_ is a web-based recipe app that inspires users to select enticing recipes from an online recipe database and make them their own.

##### Problem Statement:
For today's developer-on-the-go, it is difficult to figure out "what's for dinner" when you've spent all day slaving in front of a keyboard. _Mon Appetit_ aims to provide meal ideas for the busy professional. This website allows users to save recipes they like and make comments on their cooking experience.

#### MVP
* Single Page App format
* Unique user login (stored in DB)
* Utilize unique user login for personalized welcome message
* Create a user database of user's selected recipes (app side database)
* Recipe is displayed in a clear, readable manner (with image, if available)
* Ability to access recipe database via Edamam API, filter by ingredient(e.g. chicken, rice, etc)
* Save recipe from API to user profile
* Recipe-of-the-blah on splash page/user dashboard (recipe cycles per page-load)
* Search results should be displayed in a readable list format
* Page is navigated by a vertical header/nav bar docked on the left side of the page (computer screen only)



#### STRETCH GOALS

* User can apply multiple filters to API search
  *User can filter API search by their own recipes
* Returned lists are shown in a collapsed state and can be expanded for greater viewability
* User can create and store their own recipe
* Users can share recipes (or recipe comments) with other users
* Users can share recipes via email

#### DB Models

##### 1. USER
  - id
  - username
  - password
  - name
  - route
##### 2. Normalizing
  - user_id (provided by USER table)
  - recipe_id (provided by API)
  - comment_id (provided by COMMENT table)
##### 3. COMMENT
  - comment_id
  - user_id
  - recipe_id
  - comment
##### 4. RECIPES
  - Recipe_id (local)
  - Recipe_url (API)


