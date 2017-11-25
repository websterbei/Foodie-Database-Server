#Foodie Database API Specification

##Database structure
MongoDB:
  Collections: Cities

Information of Restaurants:
  name: Name of the restaurant
  address: Address of the restaurant
  taste: Score for the taste of food
  service: Score for service of the restaurant
  env: Score for the environment of the restaurant
  price: Average spending at the restaurant
  category: Cuisine type
  img: Base64 encoded image file of the restaurant logo

##Lookups
  ###Query information
     1. city : String (required)
     2. travelTime: Integer (minutes, not required, default 30 mins)

##Survey question
  ###Average amount of money to spend
      1. for lunch : Integer
      2. for dinner : Integer
  ###Maximum amount of money willing to spend
      1. for lunch : Integer
      2. for dinner : Integer
  ###Rank preference for cuisine types
  ###Importance of the factors
      1. taste : 1 - 10
      2. service: 1 - 10
      3. environment : 1 - 10


##Simple recommender system (first stage)
  ###
